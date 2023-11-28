import { IUser } from "../../models/IUser"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchUsers } from "./ActionCreators"

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
    }),
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload
    })
    
  },
})

export default usersSlice.reducer
