import { RequestHandler } from 'express'
import { ZodObject, ZodRawShape } from 'zod'

type TProperty = 'body' | 'header' | 'params' | 'query'

type TErrors = Record<string, Record<string, string>>

type TReqData = Partial<Record<TProperty, any>>

type TGetSchema = <T extends ZodRawShape>(schema: ZodObject<T>) => ZodObject<T>

type TAllSchemas = Record<TProperty, ZodObject<any>>

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler

export { TProperty, TErrors, TReqData, TValidation }
