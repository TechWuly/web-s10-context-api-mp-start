// Create your context here
import React, {createContext} from 'react'

export const QuotesContext = createContext()

const value = {
    car: 'Toyota Celica'
}

//export a function called QuotesProviver
//it will take 'props' and return some jsx QuotesContext.Provider
//and in there we will render props.children
//props.children will become the part of React Tree we want to provide a value to.
// we then pass in the 'value' props to QuotesContext.Provider 
export function QuotesProviver(props) {
  <QuotesContext.Provider value={value}>
    {props.children}
  </QuotesContext.Provider>
}


