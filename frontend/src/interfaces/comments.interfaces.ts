import { z } from 'zod';
import { commentSchema } from '../schemas';

export type TComment = z.infer<typeof commentSchema>;
