document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementsByClassName("grid")[0];
  let squares = Array.from(document.querySelectorAll(".grid div"));
  const scoreSpan = document.getElementById("score");
  const gameButton = document.getElementById("game-button");
  const colors = ["yellow", "orange", "red", "blue", "green"];
  const width = 10;
  let nextRandom = 0;
  let move;
  let score = 0;

  const LFigure = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];

  const ZFigure = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
  ];

  const TFigure = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];

  const OFigure = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];

  const IFigure = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  const figures = [LFigure, ZFigure, TFigure, OFigure, IFigure];

  let position = 4;
  let rotation = 0;

  let random = Math.floor(Math.random() * figures.length);
  let current = figures[random][rotation];

  const draw = () => {
    current.forEach((index) => {
      squares[position + index].style.backgroundColor = colors[random];
    });
  }

  const undraw = () => {
    current.forEach((index) => {
      squares[position + index].classList.remove("figure");
      squares[position + index].style.backgroundColor = "";
    });
  }

  const control = (e) => {
    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      rotate();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      moveDown();
    }
  }
  document.addEventListener("keyup", control);

  const moveDown = () => {
    undraw();
    position += width;
    draw();
    freeze();
  }

  const freeze = () => {
    if (
      current.some((index) =>
        squares[position + index + width].classList.contains("taken")
      )
    ) {
      current.forEach((index) =>
        squares[position + index].classList.add("taken")
      );
      random = nextRandom;
      nextRandom = Math.floor(Math.random() * figures.length);
      current = figures[random][rotation];
      position = 4;
      draw();
      displayShape();
      addScore();
      gameOver();
    }
  }

  const moveLeft = () => {
    undraw();
    const isAtLeftEdge = current.some(
      (index) => (position + index) % width === 0
    );
    if (!isAtLeftEdge) position -= 1;
    if (
      current.some((index) =>
        squares[position + index].classList.contains("taken")
      )
    ) {
      position += 1;
    }
    draw();
  }

  const moveRight = () => {
    undraw();
    const isAtRightEdge = current.some(
      (index) => (position + index) % width === width - 1
    );
    if (!isAtRightEdge) position += 1;
    if (
      current.some((index) =>
        squares[position + index].classList.contains("taken")
      )
    ) {
      position -= 1;
    }
    draw();
  }

  const isAtRight = () => {
    return current.some((index) => (position + index + 1) % width === 0);
  }

  const isAtLeft = () => {
    return current.some((index) => (position + index) % width === 0);
  }

  const checkRotatedPosition = (P) => {
    P = P || position;
    if ((P + 1) % width < 4) {
      if (isAtRight()) {
        position += 1; 
        checkRotatedPosition(P); 
      }
    } else if (P % width > 5) {
      if (isAtLeft()) {
        position -= 1;
        checkRotatedPosition(P);
      }
    }
  }

  const rotate = () => {
    undraw();
    rotation++;
    if (rotation === current.length) {
      rotation = 0;
    }
    current = figures[random][rotation];
    checkRotatedPosition();
    draw();
  }

  const displaySquares = document.querySelectorAll(".next-figure div");
  const displayWidth = 4;
  const displayIndex = 0;

  const upNextTetrominoes = [
    [1, displayWidth + 1, displayWidth * 2 + 1, 2], 
    [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1],
    [1, displayWidth, displayWidth + 1, displayWidth + 2],
    [0, 1, displayWidth, displayWidth + 1],
    [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1],
  ];

  const displayShape = () => {
    displaySquares.forEach((square) => {
      square.classList.remove("figure");
      square.style.backgroundColor = "";
    });
    upNextTetrominoes[nextRandom].forEach((index) => {
      displaySquares[displayIndex + index].classList.add("figure");
      displaySquares[displayIndex + index].style.backgroundColor =
        colors[nextRandom];
    });
  }

  gameButton.addEventListener("click", () => {
    if (move) {
      clearInterval(move);
      move = null;
    } else {
      draw();
      move = setInterval(moveDown, 1000);
      nextRandom = Math.floor(Math.random() * figures.length);
      displayShape();
    }
  });

  const addScore = () => {
    for (let i = 0; i < 199; i += width) {
      const row = [
        i,
        i + 1,
        i + 2,
        i + 3,
        i + 4,
        i + 5,
        i + 6,
        i + 7,
        i + 8,
        i + 9,
      ];

      if (row.every((index) => squares[index].classList.contains("taken"))) {
        score += 10;
        scoreSpan.innerHTML = score;
        row.forEach((index) => {
          squares[index].classList.remove("taken");
          squares[index].classList.remove("figure");
          squares[index].style.backgroundColor = "";
        });
        const squaresRemoved = squares.splice(i, width);
        squares = squaresRemoved.concat(squares);
        squares.forEach((cell) => grid.appendChild(cell));
      }
    }
  }

  const gameOver = () => {
    if (
      current.some((index) =>
        squares[position + index].classList.contains("taken")
      )
    ) {
      scoreSpan.innerHTML = "end";
      clearInterval(move);
    }
  }
});
