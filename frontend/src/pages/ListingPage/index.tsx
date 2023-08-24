/* eslint-disable react-hooks/exhaustive-deps */
import { StyledMain } from './style';
import carSvg from '../../utils/images/mustang.svg';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks';
import { useForm, SubmitHandler } from 'react-hook-form';
import { commentSchema } from '../../schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { TComment } from '../../interfaces';
import { Comment } from '../../components/Comment';
import { useCar } from '../../hooks';
import { useNavigate } from 'react-router-dom';

export const ListingPage = () => {
  const { user } = useAuth();
  const { selectedCar } = useCar();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm<TComment>({
    resolver: zodResolver(commentSchema)
  });

  useEffect(() => {
    if (selectedCar.id === 0) {
      navigate('/');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const assignCommentInputValue = (newValue: string) => {
    const oldValue = getValues('comment');
    if (oldValue !== '') {
      newValue = ' ' + newValue;
    }
    setValue('comment', oldValue + newValue);
  };

  const submitComment: SubmitHandler<TComment> = (data) => {
    console.log(data);
    if (user) {
      console.log('Está logado');
    } else {
      toast.warning('Você deve estar logado para publicar um commentário');
    }
  };

  return (
    <>
      <Header />
      <StyledMain error={errors?.comment}>
        <div className='blueBox' />
        <div className='contentContainer'>
          <section className='carSection'>
            <div className='carInfo'>
              <div className='imageContainer'>
                <img src={carSvg} alt='Car cover photo' />
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
                <li>
                  <img src={carSvg} alt='foto secundária do carro' />
                </li>
                <li>
                  <img src={carSvg} alt='foto secundária do carro' />
                </li>
                <li>
                  <img src={carSvg} alt='foto secundária do carro' />
                </li>
                <li>
                  <img src={carSvg} alt='foto secundária do carro' />
                </li>
                <li>
                  <img src={carSvg} alt='foto secundária do carro' />
                </li>
              </ul>
            </div>
            <div className='profileContainer'>
              <div className='initials'>SL</div>
              <div className='name heading-6-600'>Samuel Leão</div>
              <p className='profileDescription text-style-text-body-2-400'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <button>Ver todos os anúncios</button>
            </div>
          </section>
          <section className='commentsSection'>
            <div className='posts'>
              <p className='commentsTitle heading-6-600'>Comentários</p>
              <div className='postsList'>
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
            <div className='commentInput'>
              <div className='userProfile'>
                <div className='userInitials'>SL</div>
                <p className='userName text-style-text-body-2-500'>
                  Samuel Leão
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
          </section>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
