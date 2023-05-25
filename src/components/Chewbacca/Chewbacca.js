import './Chewbacca.css'
import { Div } from '../../style/style'
import { useState, useEffect } from 'react'
import api from '../../services/api'

function Chewbacca(){

    const [chew, setChew] = useState()

    useEffect(() => {
        api
        .get('people/13/')
        .then(res => setChew(res.data))
        .catch((err) => {
            console.log('Ops, algo deu errado!') 
        })
    }, [])

    return (
        <Div className='chewContainer'>
            <h1>Chewbacca</h1>

            <div className='txt'>
                <label>Name:</label> 
                <h2>{chew?.name}</h2> 
            </div>

            <div className='txt'>
                <label>Gender:</label> 
                <h2>{chew?.gender}</h2> 
            </div>

            <div className='txt'>
                <label>Height:</label> 
                <h2>{chew?.height}</h2> 
            </div>

            <div className='txt'>
                <label>Mass:</label> 
                <h2>{chew?.mass}</h2> 
            </div>

            <div className='txt'>
                <label>Hair Color:</label> 
                <h2>{chew?.hair_color}</h2> 
            </div>

            <div className='txt'>
                <label>Eye Color:</label> 
                <h2>{chew?.eye_color}</h2> 
            </div>
        </Div>
    )
}

export default Chewbacca