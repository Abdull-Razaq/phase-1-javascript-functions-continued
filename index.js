// code your solution here

function saturdayFun(fun = "roller-skate!") {
    
    if (fun === "roller-skate") {
        
        return("This Saturday, I want to ${fun}");

    } else {
        return("This Saturday, I want to bahte my dog");
    }
    
}


function mondayWork(work = "go to the office") {

    return("This Monday, I will ${work}")
    
}

function wrapAdjective(adjective="*"){
    return function(word="special"){
        return `You are ${adjective}${word}${adjective}!`
    }
 }
