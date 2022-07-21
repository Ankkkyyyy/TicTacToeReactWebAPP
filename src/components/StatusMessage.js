import {Box,Heading,Text} from "@chakra-ui/react";

const StatusMessage=({winner,isXNext})=>
{

    // function draw()
    // {
    //     if(!winner && )
    // }

   
    // console.log(isXNext);





    return(
        <Box>
       <Heading textAlign="center" fontSize={["xl",'xl','3xl']}    mb="50px" fontWeight="bold" fontFamily="sans-serif"  color="white"  >
            {winner && ` Game Over !! & The Winner is ${winner}`} 
        </Heading>
     

        <Text textAlign="center" fontSize='2xl' fontWeight="bold"  mb="50px"  fontFamily="sans-serif"  color="white" >


      { !winner &&  `Next player is ${isXNext? 'X' : 'O'} `}



        </Text>  

    
         
        </Box>


    );

    }


export default StatusMessage;