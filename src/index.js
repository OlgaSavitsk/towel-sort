
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix)){
    return [];
}
if(matrix.length == 0){
    return [];
}
return matrix.flatMap((item, index) => (index % 2) ? item.reverse() : item); 
};