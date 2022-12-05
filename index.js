// code your solution here

//Saturday fun function

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }

//Monday work function

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }

// Wrap adjective function
let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }