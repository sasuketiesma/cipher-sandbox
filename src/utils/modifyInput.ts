const specialChars = [" ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "!", "?"];

const isAlpha = (char: string) => {
    const charCodeUppercaseA = 65;
    const charCodeUppercaseZ = 90;
    const charCodeLowercaseA = 97;
    const charCodeLowercaseZ = 122;

    if (char.length != 1) throw new Error(`Expected string of length 1, got ${char.length}`);

    const charCode = char.charCodeAt(0);
    const charCodeIsAlpha = ((charCode >= charCodeUppercaseA) && (charCode <= charCodeUppercaseZ)) || 
                            ((charCode >= charCodeLowercaseA) && (charCode <= charCodeLowercaseZ));

    return charCodeIsAlpha;
}

const isSpecialChar = (char: string) => {
    if (char.length != 1) throw new Error(`Expected string of length 1, got ${char.length}`);

    const specialCharCodes = specialChars.map(c => c.charCodeAt(0));
    const charCode = char.charCodeAt(0);

    return specialCharCodes.includes(charCode);
}

const filterText = (text: string) => {
    let filteredText = "";

    for (let i = 0; i < text.length; i++) {
        const charAtIndex = text.charAt(i);
        if (!isAlpha(charAtIndex) && !isSpecialChar(charAtIndex)) {
            continue;
        } 

        filteredText += charAtIndex;
    }

    return filteredText;
}

export { filterText, isSpecialChar };