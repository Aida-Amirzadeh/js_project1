/* let playgame = confirm('shall we play rock,paper or scissors?')
if(playgame){
    //play
    let playerchoice = prompt('please enter rock,paper or scissors')
    if (playerchoice) {
        let playerone = playerchoice.trim().toLocaleLowerCase()
        if (playerone === 'rock' || playerone === 'paper' || playerone === 'scissors') {
            let computerchoice = Math.floor(Math.random() * 3 + 1)
            let computer = computerchoice === 1 ? 'rock': computerchoice === 2 ? 'paper': 'scissors'
            
        let result =
        playerone === computer
            ? 'Tie game'
            : playerone === 'rock' && computer === 'paper'
            ? `playerone: ${playerone}\ncomputer: ${computer}
            \ncomputer wins!`
            : playerone === 'paper' && computer === 'scissors'
            ? `playerone: ${playerone}\ncomputer: ${computer}
            \ncomputer wins!`
            : playerone === 'scissors' && computer === 'rock'
            ? `playerone: ${playerone}\ncomputer: ${computer}
            \ncomputer wins!`
            : `platerone: ${playerone}\ncomputer: ${computer}
            \nplayerone wins!`
        alert(result)
        let playagain = confirm('play again?')
        playagain ? location.reload() : alert('ok thanks for playing')
        } else {
            alert('you didnt enter rock, paper or scissors')
        }
    }else{
        alert('I guess you change your mind maybe next time') 
    }
} else {
    alert('ok maybe next time')
} */

    let playgame = confirm('shall we play rock,paper or scissors?')
if(playgame){
    //play
    while (playgame) {
    const playerchoice = prompt('pleas enter rock, paper or scissors')
    if (playerchoice || playerchoice ==='') {
        const playerone = playerchoice.trim().toLocaleLowerCase()
        if (
            playerone === 'rock' ||
            playerone === 'paper' ||
            playerone === 'scissors'
        ) {
            const computerchoice = Math.floor(Math.random() * 3)
            const rpsarray = ['rock','paper','scissors']
            const computer = rpsarray[computerchoice]
        
        
    
            
    const result =
        playerone === computer
            ? 'Tie game'
            : playerone === 'rock' && computer === 'paper'
            ? `playerone: ${playerone}\ncomputer: ${computer}
            \ncomputer wins!`
            : playerone === 'paper' && computer === 'scissors'
            ? `playerone: ${playerone}\ncomputer: ${computer}
            \ncomputer wins!`
            : playerone === 'scissors' && computer === 'rock'
            ? `playerone: ${playerone}\ncomputer: ${computer}
            \ncomputer wins!`
            : `platerone: ${playerone}\ncomputer: ${computer}
            \nplayerone wins!`
        alert(result)
        playagain = confirm('play again?')
        if (!playgame)  alert('ok thanks for playing')
            continue
        } else {
            alert('you didnt enter rock, paper or scissors')
            continue
        }
    }else{
        alert('I guess you change your mind maybe next time') 
        break
    } 
    }

} else {
    alert('ok maybe next time')
    
}
