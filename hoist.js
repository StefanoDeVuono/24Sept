var x;
function hoisted(){

}

console.log(x);

x = function(){
  // blah
}

//nope
anon()

var anon = function () {

}


//works
anon()
