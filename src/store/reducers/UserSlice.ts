import { IUser } from "../../models/IUser"
import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface UserState {
    users: IUser[]
    isLoading: boolean
    error: string
    count: number
    random: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '', 
    count: 1,
    random: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.count +=1
        },
        randomizer: (state, action: PayloadAction<number>) => {
            state.random = action.payload
        }
    }
})


export default  counterSlice.reducer