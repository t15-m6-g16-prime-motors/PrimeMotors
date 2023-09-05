import { ReactNode, createContext, useEffect, useState } from 'react';
import { TComment, TRegisterComment } from '../interfaces';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import { TEditComment } from '../interfaces/comments.interfaces';

interface ICommentsProviderProps {
  children: ReactNode;
}
interface ICommentsProviderValues {
  comments: TComment[];
  setComments: React.Dispatch<React.SetStateAction<TComment[]>>;
  registerComment: (data: TRegisterComment, carId: number) => void;
  updateComment: (data: TEditComment, id: number) => Promise<void>
  deleteComment: (id: number) => Promise<void>
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
  const updateComment = async (data: TEditComment, id: number) => {
    try {
      console.log(data)
      const response = await api.patch(`/comments/${id}`, data);
      getAndSetComments();
      console.log(response);
      toast.success('Seu comentario atualizado');
    } catch (error) {
      console.log(error);
    }
  };
  const deleteComment = async (id: number) => {
    try {
      const response = await api.delete(`comments/${id}`);
      getAndSetComments();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CommentsContext.Provider
      value={{
        comments,
        setComments,
        registerComment,
        updateComment,
        deleteComment
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
