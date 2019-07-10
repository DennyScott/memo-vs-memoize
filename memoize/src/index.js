import memoize from 'memoize-one';

function add(a, b) {
  console.log('add');
  return a + b;
}

let c = 1;

function sideEffectAdd(a, b) {
  console.log('seAdd');
  return a + b + c;
}

const memAdd = memoize(sideEffectAdd);

console.log(memAdd(1, 2))
console.log(memAdd(1, 2))
c++
console.log(memAdd(1, 2))