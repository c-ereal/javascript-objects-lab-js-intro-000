var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value) {
  var recipesTwo = Object.assign({key: value}, recipes)
  return recipesTwo;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
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
