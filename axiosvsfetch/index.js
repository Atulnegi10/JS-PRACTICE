const axios = require("axios");

// async function main(){
//   const response = await fetch("");
//   const json = await response.json();
//   console.log(json.todo.length);
// }

// async function main(){
//   const response = await axios.get("");
//   console.log(response.data.todo.length);
// }

//Post request

// async function main(){
//   const response = await fetch("",
//     {method : "POST",
//     headers : {
//       "Authorization" : "bearer123"
//     }
//     }
//   );
//   const textualdata = await response.text();
//   console.log(textualdata);

// }

async function main(){
  const response = await axios.post("https://httpdump.app/dumps/9920ab0f-a381-4107-8648-7045001f813a",
   {
         username : "atul",
         password : "1234"
      },{
    headers : {
      "Authorization" : "bearer 123"
    }
  }
  );
  console.log(response.data);

}
main();