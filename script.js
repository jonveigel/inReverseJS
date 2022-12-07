let newStr = '';

function inReverseString(string) {
    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i];
    }
    console.log(newStr);
}

let result = inReverseString('Hello Jonathan Veigel');