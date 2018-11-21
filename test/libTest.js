const assert = require('assert');
const { map, filter } = require('../src/lib.js'); 

const increment = function(number) {
  return ++number;
}

const decrement = function(number) {
  return --number;
}

const square = function(number) {
  return number*number;
}

const cube = function(number) {
  return square(number)*number;
}

const isEven = function(number) {
  return number % 2 == 0;
}

const isOdd = function(number) {
  return number % 2;
}


describe("increment", function(){ 
  it("should increment positive number", function(){
    assert.equal(increment(1), 2);
    assert.equal(increment(4), 5);
  });
  it("should increment negative number", function(){
    assert.equal(increment(-1), 0);
    assert.equal(increment(-4), -3);
  });
});

describe("decrement", function(){
  it("should decrement positive number", function(){
    assert.equal(decrement(1), 0);
    assert.equal(decrement(4), 3);
  });
  it("should decrement negative number", function(){
    assert.equal(decrement(-1), -2);
    assert.equal(decrement(-4), -5);
  });
});

describe("map", function(){
  describe("with increment", function(){
    it("should increment all array elements", function(){
      assert.deepEqual(map([], increment), []);
      assert.deepEqual(map([0], increment), [1]);
      assert.deepEqual(map([1], increment), [2]);
      assert.deepEqual(map([-1], increment), [0]);
      assert.deepEqual(map([1,2], increment), [2,3]);
      assert.deepEqual(map([-1,-2], increment), [0,-1]);
      assert.deepEqual(map([1,0,2], increment), [2,1,3]);
      assert.deepEqual(map([-1,0,-2], increment), [0,1,-1]);
    });
  });
  describe("with decrement", function(){
    it("should decrement all array elements", function(){
      assert.deepEqual(map([], decrement), []);
      assert.deepEqual(map([0], decrement), [-1]);
      assert.deepEqual(map([1], decrement), [0]);
      assert.deepEqual(map([-1], decrement), [-2]);
      assert.deepEqual(map([1,2], decrement), [0,1]);
      assert.deepEqual(map([-1,-2], decrement), [-2,-3]);
      assert.deepEqual(map([1,0,2], decrement), [0,-1,1]);
      assert.deepEqual(map([-1,0,-2], decrement), [-2,-1,-3]);
    });
  });
  describe("with square",function(){
    it("should square all array elements", function(){
      assert.deepEqual(map([1,2], square), [1,4]);
    });
  });
  describe("with cube",function(){
    it("should cube all array elements", function(){
      assert.deepEqual(map([1,2], cube), [1,8]);
    });
  });
});

describe("filter", function(){
  describe("using isEven as callback function", function(){
    it("should give array containing only even numbers", function(){
      assert.deepEqual(filter([], isEven), []);
      assert.deepEqual(filter([1], isEven), []);
      assert.deepEqual(filter([2], isEven), [2]);
      assert.deepEqual(filter([1,2,3,4], isEven), [2,4]);
      assert.deepEqual(filter([-1,-2,-3,-4], isEven), [-2,-4]);
    });
  });
  describe("using isOdd as callback function", function(){
    it("should give array containing only odd numbers", function(){
      assert.deepEqual(filter([], isOdd), []);
      assert.deepEqual(filter([1], isOdd), [1]);
      assert.deepEqual(filter([2], isOdd), []);
      assert.deepEqual(filter([1,2,3,4], isOdd), [1,3]);
      assert.deepEqual(filter([-1,-2,-3,-4], isOdd), [-1,-3]);
    });
  });
});
