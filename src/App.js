import {Box,Heading, position,Button, color} from "@chakra-ui/react";
import './App.css';
import { useReducer, useState } from "react";
import Board from './components/board';
import calculateWinner from "./helpers";
import StatusMessage from "./components/StatusMessage";
import HeadingTictacetoe from "./components/Heading";
function App() {



const [board,setboard ]= useState(Array(9).fill(null));
const [isXNext,setIsNext] = useState(false);
// by default isXNext is set to False



const winner = calculateWinner(board);

// console.log(winner)

// const message = winner ? `Winner is ${winner}` : `Next player is ${isXNext? 'X' : 'O'}`;

// console.log(board);



const handleSquareClick = position =>{

//  for not changing value x & o on morethan one  clicks

if(board[position]||winner){
    return;
}

    setboard(prev=>{

// callback function is returning previous value
return prev.map((square,pos)=>{

    if(pos===position)
    {
        // return isXNext ? "X" : "O"
        if (isXNext){

            return "X"
        }
        else {
            return "O"
        }           
    }

    return square;

});
    });
 

    setIsNext(prev=> !prev);

};






  return (
    <Box  bg="purple.600" bgSize="cover" backgroundRepeat="no-repeat" minHeight="100%" >
    <Box  >
  <HeadingTictacetoe />
  
   <StatusMessage winner={winner} isXNext={isXNext} />
      <Board board={board} handleSquareClick={handleSquareClick} />
    </Box>
    </Box>
  );
}

export default App;
