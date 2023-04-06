import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { Connect, connect } from 'react-redux'

function Intervalo (props){
    const {min,max} = props
    return(
        <Card Title='Intervalo de numeros' Red>
            <div className="Intervalo">
            <span>
                <strong>Minimo:</strong>
                <input type='number' value={min} readOnly/>
            </span>
            <span>
                <strong>Maximo:</strong>
                <input type='number' value={max}readOnly/>
            </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}
export default connect(mapStateToProps)(Intervalo)