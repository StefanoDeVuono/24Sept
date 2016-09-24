// console.log('swim');

function swim(){
  console.log('swim');
}

swim();

var dance = function(){
  console.log('dance');
  return 'secret dance';
};

dance();

console.log(dance());

// var alsoDancing = dance;
//
// alsoDancing();
//
// var alsoSwimming = swim;
//
// alsoSwimming();

// stefano.drink(mimosa);

var addTwoNumbers = function (x, y) {
  return x + y;
};

console.log(addTwoNumbers(200, 300));

var speak = function (stringOrNumber) {
  console.log('hello', stringOrNumber);
}

var rc = 'raspberry cookies';

speak(rc);

var motherFunction = function(fn){
  return fn(2,3);
};

var result = motherFunction(addTwoNumbers);

console.log(result);


var iter = function(arr){
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i], 'have a mimosa');
  }
}

iter(['mick', 'brendan']);

var objStuff = function(obj){
  console.log(obj.name, 'hello');
}

objStuff({name: 'David'});
