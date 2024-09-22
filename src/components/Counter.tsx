import { useState } from "react";
import * as styles from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log(styles)
    return ( 
        <div>
            <h1 className={styles.btn}>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>increment</button>
        </div>
     );
}
 
export default Counter;