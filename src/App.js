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

const Square = ({value, onSquareClick}) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

const Board = () => {
  const [ squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
    console.log(nextSquares);
  }

  return (
  <>
    <div className='board-row'>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className='board-row'>
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className='board-row'>
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  </>
  );
}
export default Board