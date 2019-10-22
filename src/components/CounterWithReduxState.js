import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { increment, decrement, multiply, divide } from './actions';

function CounterWithReduxState(){
const counter = useSelector(state => state.counter);
const isLogin = useSelector(state => state.isLogined);
const dispatch = useDispatch();

return(
    <div>
        <span>{counter}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(multiply())}>*2</button>
        <button onClick={() => dispatch(divide())}>/2</button>
    </div>
)
    
}

export default CounterWithReduxState;