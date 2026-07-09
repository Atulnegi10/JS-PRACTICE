//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.

function settimeoutpromisified(ms){
  let p = new Promise(resolve => setTimeout(resolve,ms));
  return p;
}

// function main(){
//   console.log("main is called");
// }

// settimeoutpromisified(3000).then(main);


settimeoutpromisified(1000).then(function(){
  console.log("hi");
  settimeoutpromisified(3000).then(function(){
    console.log("hello");
    settimeoutpromisified(5000).then(function(){
      console.log("hi there");
    })
  })
})

