import { z } from "zod"

const commentSchema = z.object({
    id: z.number(),
    comment: z.string(),
    created_at: z.union([z.date(), z.string()]),
});

export { commentSchema }