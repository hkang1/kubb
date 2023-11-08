import client from '@kubb/swagger-client/client'
import { createMutation } from '@tanstack/solid-query'
import type { KubbQueryFactory } from './types'
import type {
  CreateUsersWithListInputMutationRequest,
  CreateUsersWithListInputMutationResponse,
  CreateUsersWithListInputError,
} from '../models/CreateUsersWithListInput'
import type { CreateMutationOptions, CreateMutationResult } from '@tanstack/solid-query'

type CreateUsersWithListInput = KubbQueryFactory<
  CreateUsersWithListInputMutationResponse,
  CreateUsersWithListInputError,
  CreateUsersWithListInputMutationRequest,
  never,
  never,
  never,
  CreateUsersWithListInputMutationResponse,
  {
    dataReturnType: 'full'
    type: 'mutation'
  }
>
/**
 * @description Creates list of users with given input array
 * @summary Creates list of users with given input array
 * @link /user/createWithList
 */
export function createUsersWithListInputQuery<TData = CreateUsersWithListInput['response'], TError = CreateUsersWithListInput['error']>(
  options: {
    mutation?: CreateMutationOptions<TData, TError, CreateUsersWithListInput['request']>
    client?: CreateUsersWithListInput['client']['paramaters']
  } = {},
): CreateMutationResult<TData, TError, CreateUsersWithListInput['request']> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return createMutation<TData, TError, CreateUsersWithListInput['request']>({
    mutationFn: (data) => {
      return client<CreateUsersWithListInput['data'], TError, CreateUsersWithListInput['request']>({
        method: 'post',
        url: `/user/createWithList`,
        data,
        ...clientOptions,
      }).then((res) => res as TData)
    },
    ...mutationOptions,
  })
}
