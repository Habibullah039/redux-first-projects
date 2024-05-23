
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {

  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch() ;
  
  return (
    <>
      <h1 className="text-3xl text-center text-green-600 font-bold my-[50px]">This is My First Redux</h1>
      <div className="flex w-full justify-center items-center">
        <button onClick={() => dispatch(increment()) } className='px-3 py-2 text-center rounded-md bg-blue-500 text-md font-semibold text-white'>Increment</button>
        <h2 className="text-2xl font-semibold mx-4">{count}</h2>
        <button onClick={() => dispatch(decrement())} className='px-3 py-2 text-center rounded-md bg-red-500 text-md font-semibold text-white'>Decrement</button>
      </div>
    </>
  )
}

export default App
