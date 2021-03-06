const map = function(array, mapper) {
  let result = [];
  for(value of array){
    result.push(mapper(value));
  }
  return result;
}

const recursiveMap = function(array, mapper, result = []) {
  if(array.length == 0){
    return result;
  }
  result.push(mapper(array[0]));
  return recursiveMap(array.slice(1), mapper, result);
}

const filter = function(array, predicate) {
  let result = [];
  for(value of array){
    if(predicate(value)){
      result.push(value);
    }
  }
  return result;
}

const recursiveFilter = function(array, predicate, result = []) {
  if(array.length == 0){
    return result;
  }
  if(predicate(array[0])){
    result.push(array[0]);
  }
  return recursiveFilter(array.slice(1), predicate, result);
}

const reduce = function(array, reducer, accumulator) {
  let index = 0;
  if(accumulator == undefined){
    index = 1;
    accumulator = array[0];
  }
  for(index; index < array.length; index++){
    result = reducer(array[index], accumulator);
    accumulator = result;
  }
  return accumulator;
}

const recursiveReduce = function(array, reducer, accumulator) {
  if(accumulator == undefined){
    accumulator = array[0];
    array = array.slice(1);
  }
  if(array.length == 0){
    return accumulator;
  }
  accumulator = reducer(accumulator, array[0]);
  return recursiveReduce(array.slice(1), reducer, accumulator);
}

module.exports = { map,
  filter,
  reduce,
  recursiveMap,
  recursiveFilter,
  recursiveReduce };
