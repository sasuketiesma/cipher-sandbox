const alphabet = "abcdefghijklmnopqrstuvwxyz";

const encryptCaesar = (message: string, shift: number, ignoreCase: boolean) => {
    // const alphabetLower = alphabet.toLowerCase();
    // const alphabetUpper = alphabet.toUpperCase();
    let output = "";
    const leastPositiveResidue = ((shift % 26) + 26) % 26;

    for (let i = 0, charNum: number, shiftedCharNum: number; i < message.length; i++) {
        if (!alphabet.includes(message[i])) {
            output += message[i];
            continue;
        }

        charNum = alphabet.indexOf(message[i]);
        shiftedCharNum = (charNum + leastPositiveResidue) % 26;

        output += alphabet[shiftedCharNum];
    }

    return output;
}

export default encryptCaesar;