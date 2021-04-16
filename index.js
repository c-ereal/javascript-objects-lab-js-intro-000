var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return recipes.assign({}, key, value)
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
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
