var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, key, value)
}

function destructivelyDeleteObjectWithKeyAndValue(recipes, key, value) {
  return recipes[key] = value;
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipes = Object.assign({}, recipes);
  delete newRecipes.key;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key];
  return recipes;
}
