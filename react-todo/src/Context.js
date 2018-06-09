import React from 'react'

export const Context = React.createContext()

const mq = window.matchMedia('(max-width: 1200px)')

const GlobalState = {
  isMobile: mq.matches
}

const Provider = props => {
  return (
    <Context.Provider value={ GlobalState }>
      { props.children }
    </Context.Provider>
  )
}

export default Provider
