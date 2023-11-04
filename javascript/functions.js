let add7 = (number) => {
    return number + 7
}

let multiply = (num1, num2) => {
    return num1 * num2
}

let capitalise = (text) => {
    text = text.toLowerCase()
    text = text.replace(text.charAt(0),text.charAt(0).toUpperCase())
    return text
}

let lastLetter = (text) => {
    return text.charAt(text.length-1)
}

console.log(add7(10))
console.log(multiply(1,2))
console.log(capitalise("hEllOh"))
console.log(lastLetter("abcd"))
