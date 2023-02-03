import './App.css';
import { useState } from 'react';

// // const user = {
// //   name: "Alex",
// // }

// // const products = [
// //   { title: 'Cabbage', isFruit: false, id: 1 },
// //   { title: 'Garlic', isFruit: false, id: 2 },
// //   { title: 'Apple', isFruit: true, id: 3 },
// // ];

// // const listItem = products.map(product => {
// //   return (<li
// //   key={product.id}
// //     style={{color: product.isFruit ? 'darkgreen' : 'purple'}}>
// //     {product.title}
// //   </li>)
// //   }  
// // )

  
// // function MyButton() {
// //   return (
// //     <button>I'm a button with {user.name}</button>
// //   );
// // }


// const MyButton = ({count , onClick}) => {
//   return (
//     <button onClick={onClick}>
//       Click me {count}
//     </button>
//   );
// }

// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <MyButton count ={count} onClick={handleClick}/>
//         <MyButton count ={count} onClick={handleClick}/>
//       </header>
//     </div>
//   );
// }



// export default App;

const Square = (props) => {
  return (
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = (props) => {
  const handleClick = (i) => {
    if (props.squares[i] || calculateWinner(props.squares)) return;
    
    const nextSquares = props.squares.slice();
    // console.log(props.squares);
    if (props.xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";

    props.onPlay(nextSquares);
    // props.setxIsNext(!props.xIsNext);
      // nextSquares[i] = "X";
    console.log(nextSquares);
  }

  const winner = calculateWinner(props.squares);
  let status;
  if (winner) {
    status = "winner " + winner
  } else {
    status = "Next palyer " + (props.xIsNext ? 'X' : '0')
  }


  return (
  <>
    <div className='status'>{status}</div>
    <div className='board-row'>
      <Square value={props.squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={props.squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={props.squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className='board-row'>
      <Square value={props.squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={props.squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={props.squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className='board-row'>
      <Square value={props.squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={props.squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={props.squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  </>
  );
}


const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
  const currentSquares = history[currentMove];
  
  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    console.log(history);
    setXIsNext(!xIsNext);
  }



const jumpTo = (nextMove) => {
  setCurrentMove(nextMove);
  setXIsNext(nextMove % 2 === 0)
}

const moves = history.map((squares, move) => {
  let description;
  if (move > 0) {
    description = 'go to move #' + move;
  }
  else {
    description = 'go to game start'
  }
  // console.log(move);
  return(
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  )
})




  return (
    <div className="game">
      <div className="game-board">
        <Board  xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// export default Board
export default Game