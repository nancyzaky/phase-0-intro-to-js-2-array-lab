const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
 return cats.push(name);
}

function destructivelyPrependCat(name) {
 return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyRemoveFirstCat() {
  return cats.shift();
}

function appendCat(name) {
  const newArr = cats.slice()
   newArr.push(name);
   return newArr;
}

function prependCat(name) {
  const newArr = cats.slice()
   newArr.unshift(name);
   return newArr;
}

function removeLastCat(){
  const newArr = cats.slice()
   newArr.pop();
   return newArr;
}


function removeFirstCat(){
  const newArr = cats.slice()
   newArr.shift();
   return newArr;
}


