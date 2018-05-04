var pObj = new Promise(function (resolve, reject) {
   setTimeout(function () {
     resolve({ done: true })
   }, 3000)
});

pObj.then(function(data){
   console.log(data);
   console.log(data);
   console.log(data);
   console.log(data);
   console.log(data);
});