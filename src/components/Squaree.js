import {Button} from "@chakra-ui/react";

function Squaree(props){
     
    // console.log(props)
    return(
        <Button colorScheme='teal' fontSize="50px" p="50px" borderBlockEnd="2px" borderRight="2px"  variant='ghost' >{props.value}</Button>
    
    );
}

export default Squaree;