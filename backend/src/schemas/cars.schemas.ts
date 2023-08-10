import { z } from "zod"

const carSchema = z.object({
    id: z.number(),
    brand: z.string(),
    model: z.string(),
    description: z.string(),
    color: z.string(),
    year: z.number().int(),
    fuel_type: z.string(),
    kilometrage: z.number().int(),
    price: z.union([z.number(), z.string()]),
    published: z.boolean(),
    good_deal: z.boolean(),
    created_at: z.union([z.date(), z.string()]),
})

const carsSchemaRequest = carSchema.omit({
    id: true,
    created_at: true,
    good_deal: true,
})

const carsSchemaUpdate = carSchema.omit({
    id: true,
    published_in: true,
    created_at: true 
}).partial()

const carSchemaResponse = carSchema

const carsSchemaResponse = z.array(carSchema)

export { carSchema, carsSchemaRequest, carsSchemaUpdate, carsSchemaResponse,carSchemaResponse }