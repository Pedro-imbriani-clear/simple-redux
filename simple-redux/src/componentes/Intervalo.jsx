import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props=>{
    return(
        <Card Title='Intervalo de numeros' Red>
            <div className="Intervalo">
            <span>
                <strong>Minimo:</strong>
                <input type='number' value={0} readOnly/>
            </span>
            <span>
                <strong>Maximo:</strong>
                <input type='number' value={10}readOnly/>
            </span>
            </div>
        </Card>
    )
}