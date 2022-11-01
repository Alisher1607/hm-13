import { useState } from "react";
import classes from "./MealItem.module.css";
export function MealItem(props) {
  const newPrice = +props.price.toFixed(2);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(newPrice);

  const plusTotal = () => {
    setCount(count + 1);
    setPrice(price + props.price);
  };
  const minusTotal = () => {
    setCount(count - 1);
    setPrice(price - props.price);
  };

  return (
    <li className={classes.meal}>
      <div>
        {" "}
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{newPrice}</p>
      </div>
      <div>
        <button onClick={minusTotal} disabled={count === 0}>
          -
        </button>
        <h4>{count}</h4>
        <button onClick={plusTotal}>+</button>
        <div>total : {+price.toFixed(2)}</div>
      </div>
    </li>
  );
}
