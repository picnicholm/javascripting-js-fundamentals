const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function(moves) {
  let x = 0 
  let y = 0
  for (const move of moves) {
    if ('north' === move) {
      ++y
    } if ('east' === move) {
      ++x
    } if ('south' === move) {
      --y
    } if ('west' === move) {
      --x
    }
  }
  return [x,y]
}
console.log(finalPosition(moves))