import {configureStore} from '@reduxjs/toolkit'
import flightReducer from './FlightSlice'

let store=configureStore({
    reducer:{
        flights:flightReducer
    }
})

export default store