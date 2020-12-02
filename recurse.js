/*
I: rounds
O: results array with ALL possible outcomes
C:
E: rounds = 0
*/
var rockPaperScissors = (rounds) => {
  if (rounds === 0) {
    return [];
  }
  // holds outcomes
  const results = [];
  // recursive fn
  function letTheGamesBegin(games) {
    const rpsArr = ["R", "P", "S"]
    // base case
    if (games.length === rounds) {
      results.push(games);
      return;
    }
    // iterate over possibilities, decision making continues recursively until desired outcome of all possible outcomes of any amount of rounds
    rpsArr.forEach(game => {
      letTheGamesBegin(games + game)
    })
  }
  // triggers recursive function
  letTheGamesBegin("");
  // returns outcomes
  return results;
};
console.log('should log 27!  result: ' + rockPaperScissors(3).length); //27?
console.log('should log 243!  result: ' + rockPaperScissors(5).length); //243?