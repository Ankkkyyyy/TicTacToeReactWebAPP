import {Box,Heading} from "@chakra-ui/react";
import './App.css';
import { useState } from "react";
import Board from './components/board';
import calculateWinner from "./helpers";
function App() {

  
const [board,setboard ]= useState(Array(9).fill(null));
const [isXNext,setIsNext] = useState(false);
// by default isXNext is set to False

const winner = calculateWinner(board);

// console.log(winner)

const message = winner ? `Winner is ${winner}` : `Next player is ${isXNext? 'X' : 'O'}`;

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
    <Box >
      <Heading textAlign="center" pt="12px" mb="50px" bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='5xl'
  fontWeight='extrabold'  >TIC TAC TOE </Heading>
   <Heading align="center" pb="40px" fontSize="2xl" >{message}</Heading>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </Box>
  );
}

export default App;
