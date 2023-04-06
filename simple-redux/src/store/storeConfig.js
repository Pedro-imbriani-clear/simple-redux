import { createStore, combineReducers } from 'redux'
import NumerosReducers from './reducers/NumerosReducers'

const reducers = combineReducers({

    numeros:NumerosReducers ,

})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig