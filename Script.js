const input = document.querySelector(".textInput");
const button = document.querySelector(".convertBtn");
const output = document.querySelector(".output");

function binaryToAscii(binaryString) {
    return binaryString
        .split(" ")
        .map(bin => String.fromCharCode(parseInt(bin, 2)))
        .join("");
}

button.addEventListener("click", () => {
    const text = input.value.trim();

    if (text === "") {
        output.textContent = "Bitte Binärcode eingeben!";
    } 
    else if (!/^[01\s]+$/.test(text)) {   // Nur 0,1 und Leerzeichen erlaubt
        output.textContent = "Ungültiger Binärcode!";
    } 
    else {
        output.textContent = binaryToAscii(text);
    }
});
