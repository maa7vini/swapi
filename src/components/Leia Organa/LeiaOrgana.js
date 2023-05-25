import './LeiaOrgana.css'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import { Div } from '../../style/style'

function LeiaOrgana(){

    const [leia, setLeia] = useState()

    useEffect(() => {
        api
        .get('people/5/')
        .then(res => setLeia(res.data))
        .catch((err) => {
            console.log('Ops, algo deu errado!') 
        })
    }, [])

    return (
        <Div className='leiaContainer'>

            <h1>Leia</h1>

            <div className='txt'>
                <label>Name:</label> 
                <h2>{leia?.name}</h2> 
            </div>

            <div className='txt'>
                <label>Gender:</label> 
                <h2>{leia?.gender}</h2> 
            </div>

            <div className='txt'>
                <label>Height:</label> 
                <h2>{leia?.height}</h2> 
            </div>

            <div className='txt'>
                <label>Mass:</label> 
                <h2>{leia?.mass}</h2> 
            </div>

            <div className='txt'>
                <label>Hair Color:</label> 
                <h2>{leia?.hair_color}</h2> 
            </div>

            <div className='txt'>
                <label>Eye Color:</label> 
                <h2>{leia?.eye_color}</h2> 
            </div>
        </Div>
    )
}

export default LeiaOrgana