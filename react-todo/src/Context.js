import React from 'react'

export const { Provider, Consumer } = React.createContext()

export default class ProviderComponent extends React.Component {
  state = {
    todos: [],
    showInput: false
  }

  updateContextState = data => this.setState(data)

  fetchAndSetState = () => {
    this.timer = setTimeout(() => this.setState({
      todos: [
        {
          todo: 'Go to potions class'
        },
        {
          todo: 'Buy new robes'
        },
        {
          todo: 'Visit Hagrid'
        }
      ]
    }), 1000)
  }

  componentDidMount() {
    this.fetchAndSetState()
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const store = {
      ...this.state,
      updateContextState: this.updateContextState
    }

    return (
      <Provider value={store}>
        {this.props.children}
      </Provider>
    )
  }
}
