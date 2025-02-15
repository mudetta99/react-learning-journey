import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from '../store/counterSlice';

export default function Counter() {

    const dispatch = useDispatch();

    const {count} = useSelector(store => store.counterSlice)
    const ptoduct = useSelector(store => store.productSlice)

    const increaseHandler = () => {
        dispatch(increase(5))
    }

    const decreaseHandler = () => {
        dispatch(decrease(3))
    }

    return (
        <div className='container m-5 -py-5'>
        <p className='lead fs-4 m-2'>Count: <span className='badge badge-success text-dark'>{count}</span></p>
        <button className='mx-5 btn btn-warning' onClick={increaseHandler}>Increase</button>
        <button className='btn btn-danger' onClick={decreaseHandler}>Decrease</button>
      </div>
    )

}