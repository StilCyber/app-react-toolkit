import axios, { AxiosError } from "axios"
import { IUser } from "../../models/IUser"
import { createAsyncThunk } from "@reduxjs/toolkit"

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const fetchUsers = createAsyncThunk<
  IUser[],
  {
    rejectValue: ValidationErrors
  }
>("user/fetchAll", async () => {
  try {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    )
    return response.data
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err
    if (!error.response) {
      throw err
    }
    // We got validation errors, let's return those so we can reference in our component and set form errors
    return thunkAPI.rejectWithValue(error.response.data)
  }
})
