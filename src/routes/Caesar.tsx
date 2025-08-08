import { useEffect, useState } from "react";
import encryptCaesar from "../algorithms/caesar";
import './Caesar.css'

const Caesar = () => {
    const [ plaintext, setPlaintext ] = useState("Encrypt your message here!");
    const [ shift, setShift ] = useState("-3");
    const [ output, setOutput ] = useState("");
    const [ ignoreForeign, setIgnoreForeign ] = useState(false);

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

        const ciphertext =  encryptCaesar(plaintext, currentShift, ignoreForeign);
        setOutput(ciphertext);
    }, [ plaintext, shift, ignoreForeign ]);

    return (
        <>
            <div className="bg-slate-300 mx-10 h-screen flex flex-col">
                <div className="h-20 w-full bg-black"></div>
                <div className="h-25 px-15 w-full flex items-center">
                    <h1 className="font-extrabold text-3xl">Caesar Cipher</h1>
                </div>
                <div className="px-15 h-20 bg-slate-400 flex justify-left">
                    <div className="flex flex-row items-center">
                        <p className="mr-2">Shift:</p>
                        <input className="box-border px-1 border-3 rounded-md w-15 border-slate-600 bg-slate-500" value={shift} onChange={(event) => {modifyShift(event.target.value)}}/>
                    </div>
                    <div className="m-5">
                        <input type="checkbox" checked={ignoreForeign} onChange={() => {setIgnoreForeign(!ignoreForeign)}}/>
                    </div>
                </div>
                <div className="px-15 py-5 h-full flex justify-center bg-slate-300">
                    <textarea className="w-1/2 h-full box-border p-2 bg-slate-500 border-slate-600 border-3 rounded-md resize-none outline-none"
                        value={plaintext} onFocus={(event) => {event.target.select()}} onChange={(event) => {setPlaintext(event.target.value)}}/>
                    <div className="w-20 flex justify-center items-center">
                        <div className="triangle-right"></div>
                    </div>
                    <p className="w-1/2 h-full box-border p-2 bg-slate-500 border-slate-600 border-3 rounded-md ">{output}</p>
                </div>
                <div className="h-10 w-full bg-slate-400 flex justify-center items-center">
                    <p>Read more</p>
                </div>
            </div>
        </>
    );
}

export default Caesar;