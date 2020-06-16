import React, { useState, useEffect } from 'react';

const Counter = () => {

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(2);
    const [title, setTitle] = useState(0);
    

 // One Button is working at a time change with nums and second button will work using useeffect   
useEffect(() => {     
        document.title= `You Clicked me ${title}`    
},[title])

// Two button alert are working
// useEffect(() => {     
//     alert('I am clicked');    
// },[nums,nums])

    return (
        <div>
            <button onClick={() =>{setNum(num +1)}
             } >Click Me {num} </button>
             <br />
             <button onClick={() =>{setNums(nums +2)}
             } >Click Me {nums}
              </button>
              <br />
              <button onClick={() =>{setTitle(title +2)}
             } >Click Me {title}
              </button>
        </div>
    );
};

export default Counter;