import { useAuth } from '../../hooks';
import { TComment } from '../../interfaces';
import { StyledCommentContainer } from './style';
import { BsDot } from 'react-icons/bs';

interface ICommentProps {
  comment: TComment;
}

export const Comment = ({ comment }: ICommentProps) => {
  const { getTwoInitials, getFirstAndLastName } = useAuth();
  return (
    <StyledCommentContainer>
      <div className='profileHeader'>
        <div className='initials'>{getTwoInitials(comment.user.full_name)}</div>
        <p className='name text-style-text-body-2-500'>
          {getFirstAndLastName(comment.user.full_name)}
        </p>
        <BsDot />
        <span>há xx dias</span>
      </div>
      <p className='commentText text-style-text-body-2-400'>
        {comment.comment}
      </p>
    </StyledCommentContainer>
  );
};
