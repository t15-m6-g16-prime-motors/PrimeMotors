import { z } from 'zod';

const commentSchema = z.object({
  id: z.number(),
  comment: z.string(),
  created_at: z.union([z.date(), z.string()])
});

const commentSchemaRequest = commentSchema.omit({ id: true, created_at: true });

const commentSchemaResponse = commentSchema.extend({
  user: z.object({
    id: z.number(),
    full_name: z.string()
  }),
  car: z.object({
    id: z.number()
  })
});

const commentsSchemaResponse = z.array(commentSchemaResponse);

const commentSchemaUpdateRequest = commentSchemaRequest.optional();

const commentSchemaUpdateResponse = commentSchemaResponse.omit({
  car: true,
  user: true
});

export {
  commentSchema,
  commentSchemaRequest,
  commentSchemaResponse,
  commentsSchemaResponse,
  commentSchemaUpdateRequest,
  commentSchemaUpdateResponse
};
