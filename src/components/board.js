import {Box,VStack} from "@chakra-ui/react";
import Squaree from "./Squaree";

function Board(){
    return(
        <Box >
      
            <VStack>
               <Box >
            <Squaree value={0}/> 
 
            <Squaree value={1}/>         
     
            <Squaree value={2}/>
             </Box>
          
               <Box>
         
            <Squaree  value={3}/>
            <Squaree  value={4}/>
            <Squaree  value={5}/>
     
                </Box>
          
          
                <Box>
      
            <Squaree  value={6}/>
            <Squaree  value={7}/>
            <Squaree  value={8}/>
        
                </Box>
          
        </VStack>
        </Box>


    );
}

export default Board;