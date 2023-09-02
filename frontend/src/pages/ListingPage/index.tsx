/* eslint-disable react-hooks/exhaustive-deps */
import { StyledMain } from './style';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth, useComment, useModal } from '../../hooks';
import { useForm, SubmitHandler } from 'react-hook-form';
import { commentSchema } from '../../schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { TRegisterComment } from '../../interfaces';
import { Comment } from '../../components/Comment';
import { useCar } from '../../hooks';
import { useNavigate, useParams } from 'react-router-dom';
import GenericModal from '../../components/Modal/ModalGeneric';
import { ListingPagePicture } from '../../components/ListingPagePicture';

export const ListingPage = () => {
  const { user, getTwoInitials, getFirstAndLastName } = useAuth();
  const { selectedCar, setSelectedCar, setSelectedSeller, allCars } = useCar();
  const { showModal } = useModal();
  const { comments, registerComment } = useComment();

  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors }
  } = useForm<TRegisterComment>({
    resolver: zodResolver(commentSchema)
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    if (allCars.length > 0) {
      if (selectedCar.id === 0) {
        const userCar = allCars.find((car) => (car.id = Number(id)));

        if (userCar) {
          setSelectedCar(userCar);
        }
      }
    }
  }, [allCars]);

  const goToSellerProfile = () => {
    setSelectedSeller(selectedCar.user);
    navigate(`/profile/${selectedCar.user.id}`);
  };

  const assignCommentInputValue = (newValue: string) => {
    const oldValue = getValues('comment');
    if (oldValue !== '') {
      newValue = ' ' + newValue;
    }
    setValue('comment', oldValue + newValue);
  };

  const submitComment: SubmitHandler<TRegisterComment> = (data) => {
    if (user) {
      registerComment(data, selectedCar.id);
      reset();
    } else {
      toast.warning('Você deve estar logado para publicar um commentário');
    }
  };

  return (
    <>
      {showModal && <GenericModal type={showModal} />}
      <Header />
      <StyledMain error={errors?.comment}>
        <div className='blueBox' />
        <div className='contentContainer'>
          <section className='carSection'>
            <div className='carInfo'>
              <div className='imageContainer'>
                <img
                  src={selectedCar.picture.coverImage}
                  alt='Car cover photo'
                />
              </div>
              <div className='carData'>
                <h1 className='heading-6-600'>
                  {selectedCar.brand + ' | ' + selectedCar.model}
                </h1>
                <div className='tagsPriceContainer'>
                  <div className='tagsContainer text-style-text-body-2-500'>
                    <p className='tag'>
                      {selectedCar.kilometrage.toLocaleString('pt-BR')}
                      {' km'}
                    </p>
                    <p className='tag'>{selectedCar.year}</p>
                  </div>
                  <p className='price heading-7-500'>
                    {parseFloat(selectedCar.price).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </p>
                </div>
                <button>Comprar</button>
              </div>
              <div className='description'>
                <h2 className='title heading-6-600'>Descrição</h2>
                <p className='text-style-text-body-1-400'>
                  {selectedCar.description}
                </p>
              </div>
            </div>
          </section>
          <section className='photosAndProfileSection'>
            <div className='photosContainer'>
              <p className='heading-6-600'>Fotos</p>
              <ul className='grid'>
                {selectedCar.picture.coverImage && (
                  <ListingPagePicture
                    carPhotoUrl={selectedCar.picture.coverImage}
                  />
                )}
                {selectedCar.picture.image01 && (
                  <ListingPagePicture
                    carPhotoUrl={selectedCar.picture.image01}
                  />
                )}
                {selectedCar.picture.image02 && (
                  <ListingPagePicture
                    carPhotoUrl={selectedCar.picture.image02}
                  />
                )}
                {selectedCar.picture.image03 && (
                  <ListingPagePicture
                    carPhotoUrl={selectedCar.picture.image03}
                  />
                )}
                {selectedCar.picture.image04 && (
                  <ListingPagePicture
                    carPhotoUrl={selectedCar.picture.image04}
                  />
                )}
                {selectedCar.picture.image05 && (
                  <ListingPagePicture
                    carPhotoUrl={selectedCar.picture.image05}
                  />
                )}
                {selectedCar.picture.image06 && (
                  <ListingPagePicture
                    carPhotoUrl={selectedCar.picture.image06}
                  />
                )}
              </ul>
            </div>
            <div className='profileContainer'>
              <div className='initials'>
                {getTwoInitials(selectedCar.user.full_name)}
              </div>
              <div className='name heading-6-600'>
                {selectedCar.user.full_name}
              </div>
              <p className='profileDescription text-style-text-body-2-400'>
                {selectedCar.user.description}
              </p>
              <button onClick={goToSellerProfile}>Ver todos os anúncios</button>
            </div>
          </section>
          <section className='commentsSection'>
            <div className='posts'>
              <p className='commentsTitle heading-6-600'>Comentários</p>
              <div className='postsList'>
                {comments.length > 0 ? (
                  comments.map((comment) =>
                    comment.car.id === selectedCar.id ? (
                      <Comment key={comment.id} comment={comment} />
                    ) : null
                  )
                ) : (
                  <div className='emptyCommentsList'>
                    <p>Ainda não existem comentários no anúncio</p>
                  </div>
                )}
              </div>
            </div>
            {user && (
              <div className='commentInput'>
                <div className='userProfile'>
                  <div className='userInitials'>
                    {getTwoInitials(user.full_name)}
                  </div>
                  <p className='userName text-style-text-body-2-500'>
                    {getFirstAndLastName(user.full_name)}
                  </p>
                </div>
                <form onSubmit={handleSubmit(submitComment)}>
                  <textarea
                    cols={50}
                    rows={3}
                    minLength={2}
                    maxLength={220}
                    placeholder='Digite seu comentário aqui.'
                    {...register('comment')}
                  ></textarea>
                  {errors.comment ? (
                    <p className='inputErrorMessage text-style-text-body-2-400'>
                      {errors.comment.message}
                    </p>
                  ) : (
                    <p className='inputErrorMessage text-style-text-body-2-400'></p>
                  )}
                  <div className='shortcutAndButton'>
                    <button type='submit'>Comentar</button>
                    <div className='shortcutsContainer'>
                      <div
                        className='shortcut'
                        onClick={() => assignCommentInputValue('Gostei muito!')}
                      >
                        Gostei muito!
                      </div>
                      <div
                        className='shortcut'
                        onClick={() => assignCommentInputValue('Incrível!')}
                      >
                        Incrível!
                      </div>
                      <div
                        className='shortcut'
                        onClick={() =>
                          assignCommentInputValue(
                            'Recomendarei para meus amigos!'
                          )
                        }
                      >
                        Recomendarei para meus amigos!
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </section>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
