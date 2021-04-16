var recipes = {};

function uddateObjectWithKeyAndValue(recipes, key, value) {
  return recipes.assign({}, key, value)
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  return recipes[key] = value;
}

function deleteFromObjectByKey(recipes, key) {
  
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key];
  return recipes;
}