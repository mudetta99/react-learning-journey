import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseAction, increaseAction } from '../redux/actions/allActions';

export default function Counter() {

    const dispatch = useDispatch();
    const { count } = useSelector(  (store) => store.counterSlice )

    const increaseHandler = () => {
        dispatch( increaseAction(5) )
    }

    const decreaseHandler = () => {
        dispatch(decreaseAction(3))
    }
    

  return (
    <div className='container m-5 -py-5'>
      <p className='lead fs-4 m-2'>Count: <span className='badge badge-success text-dark'>{count}</span></p>
      <button className='mx-5 btn btn-warning' onClick={increaseHandler}>Increase</button>
      <button className='btn btn-danger' onClick={decreaseHandler}>Decrease</button>
    </div>
  )
}
