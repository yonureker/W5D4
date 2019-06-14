Array.prototype.uniq = function() {
  let seen = [];
  this.forEach(function(el) {
    if (seen.includes(el)) {
      return;
    }
    seen.push(el);
  })
  return seen;
}

Array.prototype.twoSum = function() {
  let pairs = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length; j++) {
      debugger
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  console.log(pairs);
  return pairs;
}

Array.prototype.transpose = function() {
  let result = [];

  for(let i = 0 ; i < this.length; i++) {
    let subArray = [];
    for(let j = 0; j < this.length; j++) {
      subArray.push(this[j][i]);
    }
    result.push(subArray);
  }
  return result;
}

console.log([[1,2],[3,4]].transpose())