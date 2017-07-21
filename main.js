let display = document.getElementById("display");
let button = document.querySelectorAll(".buttons");
let equals = document.getElementById("=");
let clear = document.getElementById("clear");
let array = [];
let concat = 0;

console.log(concat);

for(x = 0; x < button.length; x++){

  button[x].addEventListener("click",function(e){
    console.log(e.target.innerHTML);
    array.push(e.target.innerHTML);
    console.log(array);
    concat = array.join("");
    console.log(concat);
    display.innerHTML = concat;
    return concat;
})
};

equals.addEventListener("click", function(){
  let answer = eval(concat);
  display.innerHTML = answer;
})


clear.addEventListener("click",function(){
  array = [];
  display.innerHTML = array;
})
