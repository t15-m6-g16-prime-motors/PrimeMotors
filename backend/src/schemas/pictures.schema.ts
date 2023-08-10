import { z } from "zod"


const pictureSchema = z.object({
    id: z.number(),
    picture: z.string(),
});

export { pictureSchema }