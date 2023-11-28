import "./App.css"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { useEffect } from "react"
import { fetchUsers } from "./store/reducers/ActionCreators"

function App() {
  const dispatch = useAppDispatch()
  const { users, isLoading, error } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <div>{JSON.stringify(users, null, 2)}</div>
      <div></div>
    </div>
  )
}

export default App
