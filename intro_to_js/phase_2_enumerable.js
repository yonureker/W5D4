let callback = function(el) {
  return (el * 2);
}

Array.prototype.myEach = function(callback) {
  for (let i = 0 ; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myMap = function(callback) {
  let result = [];
  // for (let i = 0; i < this.length; i++) {
  //   result.push(callback(this[i]))
  // }this.myEach = function(el) { result.push(callback)}
  this.myEach(function(el){
    result.push(callback(el));
    }
  );   
  return result;
}

let callback3 = function(acc, el) {

  return el;
}

Array.prototype.myReduce = function(callback3) {
  sum = 0;
  this.myEach(function(el){
    sum += callback3(sum, el);
  }
  );
  return sum;
};