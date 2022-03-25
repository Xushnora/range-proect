let elInput = document.querySelector('.inputs');
let elInputMiddle = document.querySelector('.middle');
let elInputBig = document.querySelector('.bigger');
let elSpan = document.querySelector('.range');
let elSpanMiddle = document.querySelector('.rangeMiddle');
let elSpanBig = document.querySelector('.rangeBig');
let value =  elInput.getAttribute('maxlength');
let valueMiddle = elInputMiddle.getAttribute('maxlength');
let valueBig = elInputBig.getAttribute('maxlength');

elInput.addEventListener('keyup', funcRange);
elInputMiddle.addEventListener('keyup', funcRange);
elInputBig.addEventListener('keyup', funcRange);

function funcRange() {
    let n = 100/value;
    elSpan.style.width = `${value.length*n}%`;
    elSpanMiddle.style.width = `${valueMiddle.length}%`;
    elSpanBig.style.width = `${valueBig.length/10}%`;
}
