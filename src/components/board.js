import {Box,VStack} from "@chakra-ui/react";

import Square from "./Square";


function Board({board,handleSquareClick}){



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