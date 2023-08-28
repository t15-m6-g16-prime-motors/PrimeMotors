import { z } from 'zod';
import { userSchema } from './users.schemas';

const commentSchema = z.object({
  id: z.number(),
  comment: z.string(),
  created_at: z.union([z.date(), z.string()])
});

const commentSchemaResponse = commentSchema.extend({
  user: userSchema.omit({ password: true })
});

const commentsSchemaResponse = z.array(commentSchemaResponse);

const commentSchemaRequest = commentSchema.omit({ id: true, created_at: true });

const commentSchemaUpdateRequest = commentSchemaRequest.optional();

const commentSchemaUpdateResponse = commentSchemaResponse;

export {
  commentSchema,
  commentSchemaRequest,
  commentSchemaResponse,
  commentsSchemaResponse,
  commentSchemaUpdateRequest,
  commentSchemaUpdateResponse
};
