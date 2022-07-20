import {Button} from "@chakra-ui/react";
import React from "react";

const Square = ({value,onClick})=>{
     
    // console.log(props)
    return(
        <Button colorScheme='teal'
         fontSize="50px" 
         p="50px"
          borderBlockEnd="2px" 
          borderRight="2px" 
           variant='ghost'
        onClick={onClick} >
    
            {value}

        </Button>
    
    );
}

export default Square;