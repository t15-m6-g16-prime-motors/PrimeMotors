import { StyledCommentContainer } from './style';
import { BsDot } from 'react-icons/bs';

export const Comment = () => {
  return (
    <StyledCommentContainer>
      <div className='profileHeader'>
        <div className='initials'>LS</div>
        <p className='name text-style-text-body-2-500'>Lucca Cruz</p>
        <BsDot />
        <span>há 3 dias</span>
      </div>
      <p className='commentText text-style-text-body-2-400'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </StyledCommentContainer>
  );
};
