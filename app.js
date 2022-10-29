/*console.log("Hello world!");
for(var i=0; i<3; i++){
    setTimeout( function (){
        console.log(i);},1000
    )
}

var array = [1, 2, 3, 4, 5];
for(var i = 0; i < array.length; i++) {
  delay(i);
}
function delay(i) {
  setTimeout(() => {
    console.log(array[i]);
  }, 1000);
}
for (var i = 0; i < 5; i++) {
    (function(val) {     //val is parameter
      setTimeout(function() {
        console.log(val);
      }, 3000);
    })(i); // i is argument
  }
  for (var i = 0; i < 5; i++) {
    function timeout(val) {
      setTimeout(function() {
        console.log(val);
      }, 1000);
    }
    timeout(i);
  }*/
function sum (op1, op2) {
    let res = op1+op2;
    return res;
}
let op1 = 10;
let op2 = 20;
console.log (sum(10,20));