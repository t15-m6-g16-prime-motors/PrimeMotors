import { z } from "zod"
import { DeepPartial } from "typeorm"
import { carSchema, carsSchemaRequest, carsSchemaResponse } from "../schemas/cars.schemas"

type TCar = z.infer<typeof carSchema>
type TCarRequest = z.infer<typeof carsSchemaRequest>
type TCarArray = z.infer<typeof carsSchemaResponse>
type TCarUpdate = DeepPartial<TCarRequest>

export { TCar, TCarRequest, TCarArray, TCarUpdate }