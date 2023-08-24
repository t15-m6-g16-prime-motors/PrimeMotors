import { z } from "zod"
import { DeepPartial } from "typeorm"
import { carSchemaResponse, carsPictureSchema, carsSchemaRequest, carsSchemaResponse } from "../schemas/cars.schemas"

type TCarResponse = z.infer<typeof carSchemaResponse>
type TCarRequest = z.infer<typeof carsSchemaRequest>
type TCarPictureRequest = z.infer<typeof carsPictureSchema>
type TCarArray = z.infer<typeof carsSchemaResponse>
type TCarUpdate = DeepPartial<TCarRequest>

export { TCarRequest, TCarArray, TCarUpdate, TCarResponse, TCarPictureRequest }