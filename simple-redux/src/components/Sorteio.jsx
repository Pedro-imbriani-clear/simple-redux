import { Connect, connect } from 'react-redux'
import React from 'react'
import Card from './Card'

function Sorteio(props) {
    const { min, max } = props
    const Aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card Title='Sorteio de um  numeros' Purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{Aleatorio}</strong>

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
export default connect(mapStateToProps)(Sorteio)