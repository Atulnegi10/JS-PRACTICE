
function sum(a,b){
  return a+b;
}

function sub(a,b){
  return a-b;
}

function mustiply(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}

function dooperation(a,b,op){
  return op(a,b);
}

console.log(sum(1,2));
console.log(dooperation(3,1,sub));//passing the operations as arguments