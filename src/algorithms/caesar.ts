import { isSpecialChar } from "../utils/modifyInput"

const encryptCaesar = ( message: string, shift: number ) => {
    if (shift == 0) return message;

    shift = getLeastPositiveResidueMod26(shift);

    let ciphertext = "";
    for (let i = 0; i < message.length; i++) {
        if (isSpecialChar(message[i])) {
            ciphertext += message[i];
            continue;
        }
        ciphertext += shiftChar(message[i], shift);
    }

    return ciphertext;
}

//helper functions
const getLeastPositiveResidueMod26 = ( input: number ) => {
    return ((input % 26) + 26) % 26;
}

//charNumber: a=0, b=1, ... , z=26
const getCharNumber = ( charCode: number ) => {
    const charCodeUppercaseA = 65;

    return charCode - charCodeUppercaseA;
}

const getCharFromNumber = ( charNumber: number ) => {
    const charCodeUppercaseA = 65;

    return String.fromCharCode( charNumber + charCodeUppercaseA );
}


const shiftChar = ( char: string, shift: number ) => {
    const alphabetSize = 26;
    const charCode = char.charCodeAt(0);

    const charNumber = getCharNumber(charCode);
    const encryptedCharNumber = (charNumber + shift) % alphabetSize;

    return getCharFromNumber(encryptedCharNumber);
}   


export default encryptCaesar;