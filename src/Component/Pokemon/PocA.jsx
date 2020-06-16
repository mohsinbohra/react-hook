import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const PocA = () => {

const [nums, setNums] = useState();
const[name,setName] = useState();
const [moves,setMoves] = useState();


useEffect(()=>{
            
    async function getdata(){
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${nums}`)
        console.log(res);
        setName(res.data.name);
        setMoves(res.data.moves.length);
        // const Names = (names) =>{

        //     setMoves(res.data.moves.length.map(
        //         names=>{console.log(moves.name)}
               
        //     ));

        // } 

    }
    getdata();
})

    return (
        <div>
            <h1>You Choose <span style={{color:'red'}}>{nums}</span>  value </h1>
            <h1>My Name is <span style={{color:'red'}}>{name}</span>  </h1>
            <h1>I have <span style={{color:'red'}}>{moves}</span>  moves </h1>
            <select value={nums} onChange={(event)=>{
setNums(event.target.value)
            } } >
            <option value='0'>Select</option>
            <option value='1'>1</option>
            <option value='25'>25</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            </select>
        </div>
    );
};

export default PocA;