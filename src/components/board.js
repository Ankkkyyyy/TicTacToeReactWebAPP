import {Box,VStack} from "@chakra-ui/react";
import { useState } from "react";
import Square from "./Square";


function Board(){

const [board,setboard ]= useState(Array(9).fill(null));
const [isXNext,setIsNext] = useState(false);
// by default isXNext is set to False

// console.log(board);



const handleSquareClick = position =>{

//  for not changing value x & o on morethan one  clicks
if(board[position]){
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
 

    setIsNext(prev=> !prev)

};




const renderSquare = position => {

    return (   
    <Square
          value={board[position]}
         onClick={()=>  handleSquareClick(position) }
    />   
);

};

    return(
        <Box >
      
            <VStack>
               <Box >

                {renderSquare(0)}
                {renderSquare(1)}
 
                {renderSquare(2)}    
     
     
              </Box>
          
                <Box>
         
                 {renderSquare(3)}
                 {renderSquare(4)}
                 {renderSquare(5)}
     
                </Box>
          
          
                <Box>
      
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}

        
                </Box>
          
        </VStack>
        </Box>


    );
}

export default Board;