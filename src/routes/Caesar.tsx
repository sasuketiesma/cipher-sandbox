import { useEffect, useState } from "react";
import encryptCaesar from "../algorithms/caesar";
import './Caesar.css';

const Caesar = () => {
    const [ plaintext, setPlaintext ] = useState("");
    const [ shift, setShift ] = useState(0);
    const [ output, setOutput ] = useState("");
    const [ ignoreCase, setIgnoreCase ] = useState(false);

    useEffect(() => {
        const ciphertext =  encryptCaesar(plaintext, shift, true);
        setOutput(ciphertext);
    }, [ plaintext, shift ]);

    return (
        <div>
            <h1>Caesar Cipher</h1>
            <input value={plaintext} placeholder="plaintext" onChange={(event) => {setPlaintext(event.target.value)}}></input>
            <p>shift: {shift}</p>
            <p>ignore case: {String(ignoreCase)}</p>
            <button onClick={() => {setShift(shift + 1)}}>+</button>
            <button onClick={() => {setShift(shift - 1)}}>-</button>
            <button onClick={() => {setIgnoreCase(!ignoreCase)}} >case</button>
            <p>{output}</p>
        </div>
    );
}

export default Caesar;