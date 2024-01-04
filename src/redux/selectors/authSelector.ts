import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const isAuthSelector = createSelector(
    (state: RootState) => state.persistedReducer.account,
    (account) => {
        return account
    },
)
export const isUserSelector = createSelector(
    (state: RootState) => state.persistedReducer.users,
    (users) => {
        return users
    },
)
