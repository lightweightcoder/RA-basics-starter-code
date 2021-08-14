var person = {
  name: 'Fred',
  height: 1.7,
}

// these are equivalent
console.log(person.name)
console.log(person['name'])

var keyName = 'height'

// these are equivalent
console.log(person.height)
console.log(person[keyName])
// this wont work!
console.log(person.keyName)

var main = function (input) {
  var myOutputValue = person[input]
  return myOutputValue
}

var person = {
  name: 'Fred',
  height: 1.7,
}
