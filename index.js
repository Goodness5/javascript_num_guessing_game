// readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//     function userName() {
//         console.log('welcome');   
//     }
//     readline.question('enter your username ', userName );

const prompt = require("prompt-sync")();
    var name = prompt('enter your username ')
        console.log('name: '+ name);

    function stage1() {
        console.log('WELCOME TO STAGE 1 \n '+"guess a number in the range from 1 to 2 ");
        let guess = prompt('guess your number: ')
       let correctNumber = Math.floor(Math.random()*2)+1;
    
       if (guess == correctNumber) {
            console.log('correcct!');
            return stage2();
       }
        while (guess != correctNumber) {
            console.log('you are wrong '+ name + " the correct answer is \n" + correctNumber);
            const options = ["y", "n"]
           replay = prompt('play again?'+ 'select y for yes, n for no ')
           if (replay == options[1]) {
            console.log("hope you had a wonderful time bye...");
            break;
           }
           else if(replay == options[0]) {
            return stage1();
           }
    }
}
return stage1()
// console.log(stage1());

function stage2() {
    console.log('WELCOME TO STAGE 2 \n '+"guess a number in the range from 1 to 3 ");
    let guess = prompt('guess your number: ')
   let correctNumber = Math.floor(Math.random()*3)+1;

   if (guess == correctNumber) {
        console.log('correcct!');

        return stage3();
   }
    while (guess != correctNumber) {
        console.log('you are wrong '+ name + " the correct answer is \n" + correctNumber);
        const options = ["y", "n"]
       replay = prompt('play again?'+ 'select y for yes, n for no ')
       if (replay == options[1]) {
        console.log("hope you had a wonderful time bye...");
        break;
        
       }
       else if(replay == options[0]) {
        return stage2();
       }
}
}
function stage3() {
    console.log('WELCOME TO STAGE 3 \n '+"guess a number in the range from 1 to 4 ");
    let guess = prompt('guess your number: ')
   let correctNumber = Math.floor(Math.random()*4)+1;

   if (guess == correctNumber) {
        console.log('correcct!');
   }
    while (guess != correctNumber) {
        console.log('you are wrong '+ name + " the correct answer is \n" + correctNumber);
        const options = ["y", "n"]
       replay = prompt('play again?'+ 'select y for yes, n for no ')
       if (replay == options[1]) {
        console.log("hope you had a wonderful time bye...");
        break;
        
       }
       else if(replay == options[0]) {
        return stage3();
       }
}
}
// console.log(stage2())


// const stage1 = Math.random(Math.floor(1, 2))
// //     console.log(stage1);
// const options = ["yes", "no"];
// console.log(options[1]);
