import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrementWitchCheck, increment } from "../../../App/features/Counter/action";

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrementWitchCheck(1))}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
};

export default Counter;
