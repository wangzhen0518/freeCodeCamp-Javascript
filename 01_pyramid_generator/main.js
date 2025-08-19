function buildPyramid(character, count, inverted) {
    const adding = inverted
        ? (result, newRow) => newRow + "\n" + result
        : (result, newRow) => result + newRow + "\n";
    let result = "";
    for (let rowNumber = 0; rowNumber < count; rowNumber++) {
        const padding = " ".repeat(count - rowNumber);
        const newRow = padding + character.repeat(2 * rowNumber + 1) + padding;
        result = adding(result, newRow);
    }
    return result;
}

let character = "#";
let count = 8;
let rows = [];
let inverted = true;

console.log(buildPyramid(character, count, inverted));
