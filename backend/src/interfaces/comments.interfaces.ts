import { z } from 'zod';
import { DeepPartial } from 'typeorm';
import {
  commentSchemaRequest,
  commentSchemaResponse,
  commentSchemaUpdateRequest,
  commentSchemaUpdateResponse,
  commentsSchemaResponse
} from '../schemas/comments.schemas';

type TCommentRequest = z.infer<typeof commentSchemaRequest>;
type TCommentResponse = z.infer<typeof commentSchemaResponse>;
type TCommentsResponse = z.infer<typeof commentsSchemaResponse>;

type TCommentUpdate = z.infer<typeof commentSchemaUpdateRequest>;
type TCommentUpdateRequest = DeepPartial<TCommentUpdate>;
type TCommentUpdateResponse = z.infer<typeof commentSchemaUpdateResponse>;

export {
  TCommentRequest,
  TCommentResponse,
  TCommentsResponse,
  TCommentUpdate,
  TCommentUpdateRequest,
  TCommentUpdateResponse
};
