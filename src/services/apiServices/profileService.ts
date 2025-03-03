import {
  getMedicalRecords,
  getUserDetail,
  passwordChange,
  addMedicalRecords
} from "@/utils/breakPoints";
import { api } from "../api";

export const profileService = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserMedicalRecords: builder.query({
      query: (userId: string) => ({
        url: getMedicalRecords(userId)
      })
    }),

    getUserDetails: builder.query<any, void>({
      query: () => ({
        url: getUserDetail()
      })
    }),

    changePassword: builder.mutation({
      query: (passwordData) => ({
        url: passwordChange(),
        method: "POST",
        body: passwordData
      })
    }),
    addMedicalRcord: builder.mutation({
      query: (passwordData) => ({
        url: addMedicalRecords(),
        method: "POST",
        body: passwordData
      })
    })
  })
});

export const {
  useGetUserDetailsQuery,
  useGetUserMedicalRecordsQuery,
  useChangePasswordMutation,
  useAddMedicalRcordMutation
} = profileService;
