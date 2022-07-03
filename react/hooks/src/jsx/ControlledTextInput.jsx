import React, { useState } from 'react';

export default function ControlledTextInput(props) {
    const [textInput, setTextInput] = useState('');

    function handleTextOnChange(e) {
        setTextInput(e.target.value);
    }

    return (
        <div className="text-input">
            <h2>Controlled Input</h2>
            <input type="text" onChange={handleTextOnChange} value={textInput} />
            <p>{textInput}</p>
        </div>
    )
}
