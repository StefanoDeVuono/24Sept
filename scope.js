var hoisted;

var name = 'Brandon';
var Name = 'David';

console.log(theCodesForMySwissBankAccount);

var makeObject = function (lunch, name) {
  var object;
  // make an object
  object = {
    lunch: lunch,
    name: name
  };
  return object;
};

if (true) {
  var scoped = function(){
    var hoisted = 4;
    return hoisted;
  };
  hoisted = scoped();
}

makeObject(true, 'jonah');

console.log(object);


/*
var object;
object = {
  lunch: lunch
  name: name
}
*/



var aNumber = 100;

var fn = function(){
  aNumber = 5;
  console.log(aNumber);
}

fn();

console.log(aNumber);

var name = 'stefano';

var rename = function(){
  var name = 'david';
  return name
}

var othername = rename();

console.log(othername);
