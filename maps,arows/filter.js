
const arr = [1,2,3,4,5];

function filterlogic(i){
  if(i % 2 == 0 ) return true;
  else return false;
}

const ans = arr.filter(filterlogic);
console.log(ans);