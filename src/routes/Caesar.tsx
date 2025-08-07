import { useEffect, useState } from "react";
import encryptCaesar from "../algorithms/caesar";

const Caesar = () => {
    const [ plaintext, setPlaintext ] = useState("Enter your message here!");
    const [ shift, setShift ] = useState("-3");
    const [ output, setOutput ] = useState("");
    const [ ignoreCase, setIgnoreCase ] = useState(false);

    let currentShift: number = Number(shift);

    const modifyShift = (value: string) => {
        const allowedChars = "0123456789-";
        const valueNum = Number(value);
        let isValidString = true;
        
        for (let char of value) {
            if (!allowedChars.includes(char)) {
                isValidString = false;
            }
        }

        if (value === "") {
            setShift("");
            return;
        }

        if (value === "-") {
            setShift("-");
            return;
        }

        if (!isValidString || Number.isNaN(valueNum)) {
            return;
        }

        setShift(String(valueNum));
        currentShift = valueNum;
    }

    useEffect(() => {
        if (shift === "-" || shift === "") {
            return;
        }

        const ciphertext =  encryptCaesar(plaintext, currentShift, true);
        setOutput(ciphertext);
    }, [ plaintext, shift, ignoreCase ]);

    return (
        <div>
            <h1 className="font-bold text-2xl">Caesar Cipher</h1>
            <div className="bg-blue-300">
                <div className="w-screen bg-blue-500 flex justify-center">
                    <input className="border-2 m-4" value={shift} placeholder="shift" onChange={(event) => {modifyShift(event.target.value)}}></input>
                    <div className="m-4">
                        <label>
                            <input className="border-2" type="checkbox" checked={ignoreCase} onChange={() => {setIgnoreCase(!ignoreCase)}}/>
                            ignore case
                        </label>
                    </div>
                </div>
                <div className="flex justify-center bg-blue-400">
                    <textarea className="w-xl h-28 border-2 m-6 resize-none outline-none" value={plaintext} placeholder="plaintext" onFocus={(event) => {event.target.select()}} onChange={(event) => {setPlaintext(event.target.value)}}/>
                    <p className="w-xl h-28 border-2 m-6">{output}</p>
                </div>
                
            </div>
        </div>
    );
}

export default Caesar;