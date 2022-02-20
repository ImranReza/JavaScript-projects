export default class GameView{
    constructor(){
    }

    updateBoard(game){
        this.updatTurn(game);
        const winning = game.findWinningCombinations();
        for(let i=0; i<game.board.length; i++){
            const tile = document.querySelectorAll(`.board-tile`);
            tile[i].textContent = game.board[i];

            tile[i].classList.remove("tile-winner");

            let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o";

            tile[i].innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`;

            if(winning && winning.includes(i)){
                tile[i].classList.add('tile-winner');
            }
                  
        }
        
       

    }

    updatTurn(game){
        let playerX = document.querySelector(".player-x");
        let playerO = document.querySelector(".player-o");

        playerX.classList.remove('active');
        playerO.classList.remove('active');

        if(game.turn === "X"){
            playerX.classList.add('active');
        }else{
            playerO.classList.add('active');
        }
        

    }

}

