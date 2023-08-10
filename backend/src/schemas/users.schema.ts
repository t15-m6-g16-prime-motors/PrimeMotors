import { z } from "zod"


const userSchema = z.object({
    id: z.number(),
    full_name: z.string(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    birthdate: z.union([z.date(), z.string()]),
    is_seller: z.boolean(),
    description: z.string(),
    phone_number: z.string(),
    created_at: z.union([z.date(), z.string()]),
    updated_at: z.union([z.date(), z.string()]),
});

export { userSchema }