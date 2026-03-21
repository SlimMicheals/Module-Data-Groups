//function contains() {}

//module.exports = contains;

function contains(obj, prop) {

  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }

  return prop in obj;
}

module.exports = contains;
