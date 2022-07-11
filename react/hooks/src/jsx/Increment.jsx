//import cx from 'classnames';
import React, {useState} from 'react';

export default function Increment() {

    const [count, setCount] = useState(42);

    function increment() {
        setCount(count + 1);
    }

    return (
        <>
            <div>
                <h2 className="counter">Increment - {count}</h2>
                <button className="counter-button" onClick={increment}>Click</button>
            </div>
            <style>{`
                .counter-button {
                    font-size: 1rem;
                    padding: 5px 10px;
                    color:  #585858;
                }
            `}</style>
        </>
    );

}
