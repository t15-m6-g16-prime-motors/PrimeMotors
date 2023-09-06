/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from 'react';
import { useAuth, useComment, useModal } from '../../hooks';
import { TComment } from '../../interfaces';
import { StyledCommentContainer } from './style';
import { BsDot } from 'react-icons/bs';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { editCommentSchema } from '../../schemas/comment.schema';
import { CommentsContext } from '../../providers/CommentsProvider';
import { AuthContext } from '../../providers/AuthProvider';
import { TEditComment } from '../../interfaces/comments.interfaces';
interface ICommentProps {
  comment: TComment;
}

export const Comment = ({ comment }: ICommentProps) => {
  const [timeSincePost, setTimeSincePost] = useState('');
  const [showIcons, setShowIcons] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { handleShowModal } = useModal();
  const { getTwoInitials, getFirstAndLastName } = useAuth();
  const { comments } = useComment();
  const [editedComment, setEditedComment] = useState(comment.comment);
  const { updateComment,  setCommentSelect } =
    useContext(CommentsContext);
  const { user } = useContext(AuthContext);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleMouseEnter = () => {
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setShowIcons(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TEditComment>({
    resolver: zodResolver(editCommentSchema)
  });
  const openModalDelete = ()=>{
    setCommentSelect(comment)
    handleShowModal("deleteComment")
  }
  const toggleEditing = () => {
    setIsEditing(!isEditing);

  };
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      const textarea = textareaRef.current;
      const length = textarea.value.length;

      textarea.focus();
      textarea.setSelectionRange(length, length);
    }
  }, [isEditing]);
  const handleSaveEditedComment = () => {
    if (editedComment) {
      updateComment({ ...comment, comment: editedComment }, comment.id);
      toggleEditing();
    }
  };
  const getTimeSincePost = () => {
    const currentDate: Date = new Date();
    const commentDate: Date = new Date(comment.created_at);

    const secondsDifference = Math.floor(
      (currentDate.getTime() - commentDate.getTime()) / 1000
    );
    if (secondsDifference < 60) {
      return `há menos de 1 minuto`;
    }

    const minutesDifference = Math.floor(secondsDifference / 60);
    if (minutesDifference < 60) {
      if (minutesDifference == 1) {
        return `há 1 minuto`;
      } else {
        return `há ${minutesDifference} minutos`;
      }
    }

    const hoursDifference = Math.floor(minutesDifference / 60);
    if (hoursDifference < 24) {
      if (hoursDifference == 1) {
        return `há 1 hora`;
      } else {
        return `há ${hoursDifference} horas`;
      }
    }

    const daysDifference = Math.floor(hoursDifference / 24);
    const monthsDifference =
      (currentDate.getFullYear() - commentDate.getFullYear()) * 12 +
      (currentDate.getMonth() - commentDate.getMonth());
    if (monthsDifference < 1 && daysDifference < 31) {
      if (daysDifference == 1) {
        return `há 1 dia`;
      } else {
        return `há ${daysDifference} dias`;
      }
    }

    if (monthsDifference < 12) {
      if (monthsDifference == 1) {
        return `há 1 mês`;
      } else {
        return `há ${monthsDifference} meses`;
      }
    }

    const yearsDifference =
      currentDate.getFullYear() - commentDate.getFullYear();
    if (yearsDifference === 1) {
      return 'há 1 ano';
    } else if (yearsDifference) {
      return `há ${yearsDifference} anos`;
    }

    return 'há algum tempo';
  };

  const handleTextareaKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === 'Escape' && !e.shiftKey) {
      e.preventDefault();
      toggleEditing();
    } else if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveEditedComment();
    }
  };

  useEffect(() => {
    setTimeSincePost(getTimeSincePost());
  }, [comments]);

  setInterval(() => setTimeSincePost(getTimeSincePost()), 60000);

  return (
    <StyledCommentContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='profileHeader'>
        <div className='initials'>{getTwoInitials(comment.user.full_name)}</div>
        <p className='name text-style-text-body-2-500'>
          {getFirstAndLastName(comment.user.full_name)}
        </p>
        <BsDot />
        <span className='text-style-text-body-2-500'>{timeSincePost}</span>
      </div>
      {isEditing ? (
        <form
          className='form-comment-editing'
          onSubmit={handleSubmit(handleSaveEditedComment)}
        >
          <textarea
            {...register('editedComment' as 'comment')}
            ref={textareaRef}
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
            onKeyDown={handleTextareaKeyDown}
          />
          <div className='container-save-edit'>
            <span>{errors.comment?.message}</span>
            <span className='info-edit text-style-text-body-2-500 '>
              esc para
            </span>
            <button
              className='btn-edit close'
              type='button'
              onClick={toggleEditing}
            >
              cancelar
            </button>

            <span className='info-edit text-style-text-body-2-500 '>
              enter para
            </span>
            <button className='btn-edit save' type='submit'>
              salvar
            </button>
          </div>
        </form>
      ) : (
        <p className='commentText text-style-text-body-2-400'>
          {comment.comment}
        </p>
      )}
      {comment.user.id == user?.id && showIcons && (
        <div className='btn-icons-container'>
          <button className='btn-show-edit' onClick={toggleEditing}>
            <BiEdit />
          </button>
          <button
            className='btn-delete'
            onClick={openModalDelete}
          >
            <BiTrash />
          </button>
        </div>
      )}
    </StyledCommentContainer>
  );
};
