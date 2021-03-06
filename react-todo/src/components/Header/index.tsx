import React from 'react'

import styles from './index.module.css'

interface Props {
  onClick: () => void;
}

interface State {
  enter: boolean;
  leave: boolean;
}

class Header extends React.Component<Props, State> {
  state = {
    enter: false,
    leave: false
  }

  onMouseEnter = () => this.setState({ enter: true, leave: false })

  onMouseLeave = () => this.setState({ enter: false, leave: true })

  pickAnimation = () => {
    const { enter, leave } = this.state

    if (enter) return styles.animateToRight
    if (leave) return styles.animateToLeft
    // if (addedTodo) return styles.animateRotateFast
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return nextState.enter !== this.state.enter || nextState.leave !== this.state.leave
  }

  render() {
    const { onClick } = this.props
    console.log('rendered')

    return (
      <div className={styles.title}>
        todo-list
          <i
          className={`fa fa-plus ${styles.addButton} ${this.pickAnimation()}`}
          onClick={onClick}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
      </div>
    )
  }
}

export default Header
