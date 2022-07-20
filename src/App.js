import {Box,Heading} from "@chakra-ui/react";
import './App.css';
import Board from './components/board';
function App() {
  return (
    <Box >
      <Heading textAlign="center" pt="12px" mb="50px" bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='5xl'
  fontWeight='extrabold'  >TIC TAC TOE </Heading>
      <Board/>
    </Box>
  );
}

export default App;
