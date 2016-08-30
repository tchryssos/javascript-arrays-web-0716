var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray= function(array, element) {
  var new_array = [element, ...array];
  return new_array;
}

var addElementToEndOfArray = function(array, element){
  var new_array=[...array, element];
  return new_array;
}

var destructivelyAddElementToBeginningOfArray = function(array, element){
  array.unshift(element);
  var new_array=array;
  return new_array;
}

var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element);
  var new_array=array;
  return new_array;
}

var accessElementInArray=function(array, index){
  return array[index];
}

var removeElementFromBeginningOfArray=function(array){
  return array.slice(-2);
}

var removeElementFromEndOfArray=function(array){
  return array.slice(0,array.length-1);
}
