import pokedexReducer from "./pokedexReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
let rootReducer = combineReducers({
    pokedex: pokedexReducer
})

type rootReducerType = typeof rootReducer //(globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<rootReducerType>


type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U : never

export type InferActionsType<T extends {[key:string]: (...args: any[])=> any}>= ReturnType<PropertiesTypes<T>>







// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


// @ts-ignore
window.__store__ = store

export default store