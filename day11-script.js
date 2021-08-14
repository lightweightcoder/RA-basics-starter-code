var main = function (input) {
  var myOutputValue = ''
  // sideLength represents the length of each side of the square
  var sideLength = Number(input)
  var outerCounter = 0
  while (outerCounter < sideLength) {
    var innerCounter = 0
    while (innerCounter < sideLength) {
      // If current iteration represents a border element, draw ✊ instead.
      if (
        outerCounter == 0 ||
        outerCounter == sideLength - 1 ||
        innerCounter == 0 ||
        innerCounter == sideLength - 1
      ) {
        myOutputValue += '✊'
      } else {
        // Add a 👍 to the current row
        myOutputValue += '👍'
      }

      innerCounter += 1
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>'
    outerCounter += 1
  }
  return myOutputValue
}
