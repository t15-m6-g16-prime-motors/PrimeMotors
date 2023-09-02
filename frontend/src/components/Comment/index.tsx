/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth, useComment } from '../../hooks';
import { TComment } from '../../interfaces';
import { StyledCommentContainer } from './style';
import { BsDot } from 'react-icons/bs';

interface ICommentProps {
  comment: TComment;
}

export const Comment = ({ comment }: ICommentProps) => {
  const [timeSincePost, setTimeSincePost] = useState('');

  const { getTwoInitials, getFirstAndLastName } = useAuth();
  const { comments } = useComment();

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

  useEffect(() => {
    setTimeSincePost(getTimeSincePost());
  }, [comments]);

  setInterval(() => setTimeSincePost(getTimeSincePost()), 60000);

  return (
    <StyledCommentContainer>
      <div className='profileHeader'>
        <div className='initials'>{getTwoInitials(comment.user.full_name)}</div>
        <p className='name text-style-text-body-2-500'>
          {getFirstAndLastName(comment.user.full_name)}
        </p>
        <BsDot />
        <span className='text-style-text-body-2-500'>{timeSincePost}</span>
      </div>
      <p className='commentText text-style-text-body-2-400'>
        {comment.comment}
      </p>
    </StyledCommentContainer>
  );
};
