const alphabet = "abcdefghijklmnopqrstuvwxyz";

const encryptCaesar = (message: string, shift: number, ignoreForeign: boolean) => {
    let output = "";
    const leastPositiveResidue = ((shift % 26) + 26) % 26;

    for (let i = 0, charNum: number, shiftedCharNum: number; i < message.length; i++) {
        const charLowercase = message[i].toLowerCase();

        if (!alphabet.includes(charLowercase)) {
            if (!ignoreForeign) {
                output += message[i];
            }
            continue;
        }

        charNum = alphabet.indexOf(charLowercase);
        shiftedCharNum = (charNum + leastPositiveResidue) % 26;

        if (message[i] === message[i].toUpperCase()) {
            output += alphabet[shiftedCharNum].toUpperCase()
            continue;
        }

        output += alphabet[shiftedCharNum];
    }

    return output;
}

export default encryptCaesar;