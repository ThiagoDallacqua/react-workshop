import React from 'react'

export const { Provider, Consumer } = React.createContext()

export default class ProviderComponent extends React.Component {
  state = {
    todos: []
  }

  updateContextState = data => this.setState(data)

  fetchAndSetState = async () => {
    this.timer = setTimeout(() => this.setState({
      isMobile: true,
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
