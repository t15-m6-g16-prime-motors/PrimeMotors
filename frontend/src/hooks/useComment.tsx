import { useContext } from 'react';
import { CommentsContext } from '../providers/CommentsProvider';

const useComment = () => {
  const commentContext = useContext(CommentsContext);

  return commentContext;
};

export default useComment;
