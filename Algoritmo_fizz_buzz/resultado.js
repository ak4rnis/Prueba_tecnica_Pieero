

function ultimafuncion(){
    for(let númeroAComparar = 1; númeroAComparar <= 100; númeroAComparar++)
    {
        if(númeroAComparar % 3 == 0 && númeroAComparar % 5 == 0){
            console.log(`FizzBuzz`)
        } else if(númeroAComparar % 3 == 0){
            console.log(`Fizz`)
        } else if(númeroAComparar % 5 == 0){
            console.log(`Buzz`)
        } else {
            console.log(`${númeroAComparar}`)
        }
    }
}

ultimafuncion();
