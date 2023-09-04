import { ReactNode, createContext, useEffect, useState } from 'react';
import { TComment, TRegisterComment } from '../interfaces';
import { api } from '../services/api';
import { toast } from 'react-toastify';

interface ICommentsProviderProps {
  children: ReactNode;
}
interface ICommentsProviderValues {
  comments: TComment[];
  setComments: React.Dispatch<React.SetStateAction<TComment[]>>;
  registerComment: (data: TRegisterComment, carId: number) => void;
}

export const CommentsContext = createContext({} as ICommentsProviderValues);

export const CommentsProvider = ({ children }: ICommentsProviderProps) => {
  const [comments, setComments] = useState([] as TComment[]);

  const getAndSetComments = async () => {
    try {
      const allComments = await api.get('/comments');
      setComments([...allComments.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAndSetComments();
  }, []);

  const registerComment = async (data: TRegisterComment, carId: number) => {
    try {
      const newComment = await api.post(`/comments/${carId}`, data);
      setComments((previousComments) => [...previousComments, newComment.data]);

      console.log(newComment.data.created_at);
      toast.success('Seu comentário foi registrado');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentsContext.Provider
      value={{ comments, setComments, registerComment }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
