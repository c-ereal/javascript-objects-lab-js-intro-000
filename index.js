var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes.assign({}, key, value)
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipes = rescipes.assign({}, recipes);
  delete newRecipes.key;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key];
  return recipes;
}
