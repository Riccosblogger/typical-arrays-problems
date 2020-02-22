
exports.min = function min (array) {
  if (array === undefined || array.length == 0) return 0;
  var min_arr = array[0];
  for (let i=1; i<array.length; i++) if (array[i]<min_arr) min_arr = array[i];
  return min_arr; 
}

exports.max = function max (array) {
  if (array === undefined || array.length == 0) return 0;
  var max_arr = array[0];
  for (let i=1; i<array.length; i++) if (array[i]>max_arr) max_arr = array[i];
  return max_arr; 
}

exports.avg = function avg (array) {
  if (array === undefined || array.length == 0) return 0;
  var result = ( array.reduce((sum, current) => sum + current)) / array.length ;
    return result;
}
