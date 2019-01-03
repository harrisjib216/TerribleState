var state = {
    name: "j"
}
  
  
function getState(obj) {
  if (obj) {
    return state[obj];
  }
  else {
    return state;
  }
}
console.log(getState());
console.log(getState('name'));
  
  
  
function makeState(obj) {
  for(var key in obj) {
    if (state[key]) {
      state[key] = obj;
    }
  }
}
console.log(getState('name'));
console.log(makeState({'name': 'feather'}));
console.log(getState('name'));