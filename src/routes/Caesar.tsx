import { useEffect, useState } from "react";
import encryptCaesar from "../algorithms/caesar";
import { filterText } from "../utils/modifyInput";


const Caesar = () => {
    const [ plaintext, setPlaintext ] = useState("");
    const [ shift, setShift ] = useState(0);
    const [ output, setOutput ] = useState("");

    useEffect(() => {
        const ciphertext =  encryptCaesar(plaintext, shift);
        setOutput(ciphertext);
    }, [ plaintext, shift ]);


    const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filteredText = filterText(event.target.value).toUpperCase();
        setPlaintext(filteredText);
    }

    return (
        <div>
            <h1>Caesar Cipher</h1>
            <input value={plaintext} placeholder="plaintext" onChange={(event) => {onTextChange(event)}}></input>
            <p>shift: {shift}</p>
            <button onClick={() => {setShift(shift + 1)}}>+</button>
            <button onClick={() => {setShift(shift - 1)}}>-</button>
            <p>{output}</p>
        </div>
    );
}

export default Caesar;