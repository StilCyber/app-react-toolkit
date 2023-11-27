import { useSelector } from "react-redux"
import "./App.css"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { counterSlice } from "./store/reducers/UserSlice"


function App() {

  const {count, random} = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()

  const {increment, randomizer} = counterSlice.actions

  const counter = () => {
    dispatch(increment())
    dispatch(randomizer(Math.random()))


  }

  return (
    <div className="App">
      <div>{count}</div>
      <div>{random}</div>
      <button onClick={counter}>Increment</button>
    </div>
  )
}

export default App
