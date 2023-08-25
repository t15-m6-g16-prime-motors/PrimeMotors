import { z } from "zod";

const pictureSchema = z.object({
  id: z.number(),
  coverImage: z.string(),
  image01: z.string(),
  image02: z.string(),
  image03: z.string(),
  image04: z.string(),
  image05: z.string(),
  image06: z.string(),
});

const pictureSchemaRequest = pictureSchema.omit({
  id: true,
});

const pictureSchemaResponse = pictureSchema;

export { pictureSchema, pictureSchemaRequest, pictureSchemaResponse };
