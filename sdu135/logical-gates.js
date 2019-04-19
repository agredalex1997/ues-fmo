function and(a = 1, b = 1, c = 1, d = 1) {
    return a && b && c && d;
}

function or(a = 0, b = 0, c = 0, d = 0) {
    return a || b || c || d;
}

function not(a) {
    return !a;
}

function nand(a = 1, b = 1, c = 1, d = 1) {
    return not(and(a, b, c, d));
}

function nor(a = 0, b = 0, c = 0, d = 0) {
    return not(or(a, b, c, d));
}

function xor(a, b) {
    return or(and(a, not(b)), and(not(a), b));
}

function xnor(a, b) {
    return not(xor(a, b));
}

const binaryNumbers = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];

let fiveTo10 = binaryNumbers.filter((binary) => {
    let fi = parseInt(binary.charAt(0));
    let se = parseInt(binary.charAt(1));
    let th = parseInt(binary.charAt(2));
    let fo = parseInt(binary.charAt(3));

    return or(and(not(fi), not(se)), and(th, fo), and(or(th, fo), or(not(fi), not(se))))
    //truth table 5 to 10 return or(and(xor(th, fo), xor(fi, se)), and(fi, not(se), not(th), not(fo)), and(not(fi), se, th, fo))
    //karnaugh table 5 to 10 return or(and(or(fo, th), and(not(fi), se)), and(or(not(fo), not(th)), and(fi, not(se))));
})

console.log(fiveTo10);