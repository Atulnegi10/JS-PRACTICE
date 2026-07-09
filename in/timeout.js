
// function run(){
//  console.log("running bc");
// }

// setTimeout(run,1000);
// console.log("running ac");


// function waitfor3s(resolve){
//   setTimeout(resolve,3000);
// }

// function main(){
//   console.log("main is called");
// }

// waitfor3s(main);


setTimeout(function(){
  console.log("hi");
  setTimeout(function(){
    console.log("hello");
    setTimeout(function(){
      console.log("hello there");
    },5000)
  },3000)
},1000)




function after1s(){
  console.log("hi");
  setTimeout(after3s,3000)
}

function after3s(){
  console.log("hello");
  setTimeout(after5s,5000)
}

function after5s(){
  console.log("hello there");
}
setTimeout(after1s,1000)

// Promisified version of settimeout

function delay(ms){
  return new Promise(resolve => {
    setTimeout(resolve,ms);
  });
}
async function run(){

  await delay(1000);
  console.log("hi");

  await delay(3000);
  console.log("hello");

  await delay(5000);
  console.log("hello there");

}

run();