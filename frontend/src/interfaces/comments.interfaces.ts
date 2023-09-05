import { z } from 'zod';
import { commentSchema } from '../schemas';
import { editCommentSchema } from '../schemas/comment.schema';

export type TRegisterComment = z.infer<typeof commentSchema>;
export type TEditComment = z.infer<typeof editCommentSchema>;
export type TComment = {
  id: number;
  comment: string;
  created_at: (string | Date) & (string | Date | undefined);
  user: {
    id: number;
    full_name: string;
  };
  car: {
    id: number;
  };
};
