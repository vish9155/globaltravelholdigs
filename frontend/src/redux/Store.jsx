import {configureStore} from '@reduxjs/toolkit'
import flightReducer from './FlightSlice'
import OfferReducer from './FlightOffers'

let store=configureStore({
    reducer:{
        flights:flightReducer,
        offer:OfferReducer
    }
})

export default store