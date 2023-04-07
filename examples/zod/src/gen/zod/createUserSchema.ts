import z from 'zod'

import { userSchema } from './userSchema'

export const createUserResponseSchema = z.any()

/**
 * @description Created user object
 */
export const createUserRequestSchema = z.lazy(() => userSchema)

/**
 * @description successful operation
 */
export const createUserErrorSchema = z.lazy(() => userSchema)
