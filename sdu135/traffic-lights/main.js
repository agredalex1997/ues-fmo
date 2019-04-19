let eo = document.querySelector('#eo');
let ns = document.querySelector('#ns');

function test(a, b, c, d) {
    return or(and(not(a), not(b)), and(c, d), and(or(c, d), or(not(a), not(b))));
}

document.querySelectorAll('input[type="checkbox"]').forEach(function (selector) {
    selector.addEventListener('change', function (event) {

        let n = document.querySelector('#n').checked;
        let s = document.querySelector('#s').checked;
        let e = document.querySelector('#e').checked;
        let o = document.querySelector('#o').checked;

        if (test(n, s, e, o)) {
            eo.classList.add('green');
            ns.classList.remove('green');
        } else {
            eo.classList.remove('green');
            ns.classList.add('green');
        }
    })
})