function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i ++){
    if(array[i] == stopValue){
      return array;
      break;
    }
      array[i] = changeValue;
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i ++){
    if(array[i] !== skipValue){
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn){
  if (array.includes(findFn()) != true){
    return null;
  }
  for (let i = 0; i < array.length; i ++){
    if (array[i] == findFn()){
      return array[i];
      break;
    }
  }
/*  for (let i = 0; i < array.length; i ++){
    if(array[i] == findFn(){
      break;
    }
    return null;
  }
  */
}
