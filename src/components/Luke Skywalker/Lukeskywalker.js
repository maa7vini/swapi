import { Div } from '../../style/style'
import './Lukeskywalker.css'
import api from '../../services/api'
import { useState, useEffect } from 'react'

function Lukeskywalker(){

    const [luke, setLuke] = useState()

    useEffect(() => {
        api
        .get('people/1/')
        .then(res => setLuke(res.data))
        .catch((err) => {
            console.log('Ops, algo deu errado!') 
        })
    }, [])

    return (
        <Div className='lukeContainer'> 
            <h1>Luke</h1>

            <div className='txt'>
                <label>Name:</label> 
                <h2>{luke?.name}</h2>
            </div>

            <div className='txt'>
                <label>Gender:</label> 
                <h2>{luke?.gender}</h2>
            </div>

            <div className='txt'>
                <label>Height:</label> 
                <h2>{luke?.height}</h2>
            </div>

            <div className='txt'>
                <label>Mass:</label> 
                <h2>{luke?.mass}</h2> 
            </div>

            <div className='txt'>
                <label>Hair Color:</label> 
                <h2>{luke?.hair_color}</h2> 
            </div>

            <div className='txt'>
                <label>Eye Color:</label> 
                <h2>{luke?.eye_color}</h2> 
            </div>
        </Div>
    )
}

export default Lukeskywalker