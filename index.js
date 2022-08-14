window.addEventListener('DOMContentLoaded', () => {
    let tiles = Array.from(document.querySelectorAll('.nudnuud'));
    let playerDisplay = document.querySelector('.display-player');
    let resetButton = document.querySelector('#reset');
    let announcer = document.querySelector('.announcer'); 
    let tiim=document.querySelector('#min1') 
    let riim=document.querySelector('#min2')
    var bg=document.getElementById("plyr")
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;
    let PLAYERX_WON = 'PLAYERX_WON';
    let PLAYERO_WON = 'PLAYERO_WON';
    let TIE = 'TIE';
var score1=0;
var score2=0;
var plyrx=document.createElement("div")
plyrx.className="inpu"
plyrx.innerText="Player X:"+score1
var plyry=document.createElement("div")
plyry.className="inp"
plyry.innerText="Player O:"+score2
bg.appendChild(plyrx)
bg.appendChild(plyry)



    let winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
    }

    let announce = (type) => {
        switch(type){
            case PLAYERO_WON:
               
                score2++
                plyry.innerText="Player O:"+score2
               
                announcer.innerHTML = 'тоглогч <span class="playerO">O</span> хожлоо';
                
                console.log(score2)
                break;
            case PLAYERX_WON:
                score1++
                plyrx.innerText="Player x:"+score1
                announcer.innerHTML = 'тоглогч <span class="playerX">X</span> хожлоо';
                
                console.log(score1)
                break;
            case TIE:
                announcer.innerText = 'тэнцлээ';
        }
        announcer.classList.remove('hide');
    };

    let isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };

    let updateBoard =  (index) => {
        board[index] = currentPlayer;
    }

    let changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    let userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }
    
    let resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
            
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
    
});
