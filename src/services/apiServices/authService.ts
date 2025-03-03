import { login, register } from '@/utils/breakPoints';
import { api } from '../api';

export const authService = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: register(),
        method: 'POST',
        body: userData
      })
    }),
    login: builder.mutation({
      query: (loginData) => ({
        url: login(),
        method: 'POST',
        body: loginData
      })
    })
  })
});

export const { useLoginMutation, useRegisterMutation } = authService;
