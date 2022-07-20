

function calculateWinner(squares)
{
    const lines = 
    [
        //   All possible Winning Combinations
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for ( let i = 0;i < lines.length; i++)
    {
        const [a,b,c] = lines[i];
        if(squares[a]&& squares[a]===squares[b] && squares[a]===squares[c])
        // x & x is equal to x at b & x & x is equal to x at c
        {
            return squares[a];
            
        }
    }

    return null;


}


export default calculateWinner;