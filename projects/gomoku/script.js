// render game field

const rows = 15,
    colums = 15,
    table = document.querySelector('.game-field'),
    replayBtn = document.querySelector('.replay-btn');

let player = 'x',
    currentPlayer = document.querySelector('.current-player'),
    isPlaying = true;

function renderGameField(rows, colums) {
    for (let i = 0; i < colums; i++) {
        let row = document.createElement('tr');

        table.appendChild(row);

        for (let j = 0; j < rows; j++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
            cell.classList.add('cell');
            cell.setAttribute("data-col", j + 1);
            cell.setAttribute("data-row", i + 1);
        }        
    }
}

renderGameField(rows, colums);
currentPlayer.textContent = 'x';
currentPlayer.style.color = 'red';

// check cells for win

function checkVertical(activeCell, player) {
    let col = activeCell.getAttribute("data-col"),
        cells = document.querySelectorAll(`.cell[data-col="${col}"]`);

    determineWinner(cells, player);
}

function checkHorizontal(activeCell, player) {
    let row = activeCell.getAttribute("data-row"),
        cells = document.querySelectorAll(`.cell[data-row="${row}"]`);

    determineWinner(cells, player);
}

function checkDiagonal(activeCell, player, direction) {   
    // direction of diagonal from left: toRightUp or toRightDown

    let position = {
        col: +activeCell.getAttribute("data-col"),
        row: +activeCell.getAttribute("data-row")
    };

    let cells = document.querySelectorAll(`.cell`),
        diagonal = [];

    for (let i = -4; i <= 4; i++) {
        let col,
            row;

        if (direction === 'toRightUp') {
            col = position.col - i;
            row = position.row + i;
        }

        if (direction === 'toRightDown') {
            col = position.col + i;
            row = position.row + i;
        }

        cells.forEach(function(item) {
            if (item.getAttribute("data-col") === `${col}` && 
                item.getAttribute("data-row") === `${row}`) {
                diagonal.push(item);
            }
        });
        
    }
    determineWinner(diagonal, player);
}

function determineWinner(arr, player) {
    let cellsInRow = 0;

    for (let j = 0; j < arr.length; j++) {
        let winCombo = [];
        if (arr[j].classList.contains(player)) {
            cellsInRow++;
            
            if (cellsInRow >= 5) {
                winCombo.push(arr[j], arr[j-1], arr[j-2],arr[j-3],arr[j-4]);
                gameOver(player);
                winCombo.forEach(item => item.classList.add('win'));
            }
        } else {
            cellsInRow = 0;
        }
    }
}

// game

let cells = document.querySelectorAll('.cell');

cells.forEach(function(cell) {
    cell.addEventListener('click', () => {
        if (!cell.classList.contains('x') && !cell.classList.contains('o') && isPlaying === true) {
            cell.classList.add(player);
            checkVertical(cell, player);
            checkHorizontal(cell, player);
            checkDiagonal(cell, player, 'toRightUp');
            checkDiagonal(cell, player, 'toRightDown');

            if (player === 'x') {
                currentPlayer.textContent = 'o';
                currentPlayer.style.color = 'green';
                player = 'o';                
            } else {
                currentPlayer.textContent = 'x';
                currentPlayer.style.color = 'red';
                player = 'x';
            }
        }
    });    
});

// Game over

function gameOver(player) {
    let popup = document.querySelector('.game-over'),
        winner = document.querySelector('.player-win'),
        close = document.querySelector('.close');

    popup.style.display = 'flex';
    winner.textContent = player;
    isPlaying = false;

    if (player === 'x') {
        winner.style.color = 'red';
    } else {
        winner.style.color = 'green';
    }
    close.addEventListener('click', () => popup.style.display = 'none');
}

// start new game

function replay() {
    let popup = document.querySelector('.game-over');

    popup.style.display = 'none';
    player = 'x';
    currentPlayer.textContent = 'x';
    currentPlayer.style.color = 'red';
    isPlaying = true;

    cells.forEach(cell => cell.className = "cell");
}

replayBtn.addEventListener('click', replay);



