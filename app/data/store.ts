import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './reducers'

export const store = configureStore({
  reducer: rootReducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

interface IEmployeeRole {
  [index: string]: string
}

export const EmployeeRole: IEmployeeRole = {
  cook: "Повар",
  driver: "Водитель",
  waiter: "Официант"
}