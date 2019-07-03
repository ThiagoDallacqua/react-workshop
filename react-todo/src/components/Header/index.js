import React from 'react'

import styles from './index.module.css'

class Header extends React.Component {
  state = {
    enter: false,
    leave: false
  }

  onMouseEnter = () => this.setState({ enter: true, leave: false })

  onMouseLeave = () => this.setState({ enter: false, leave: true })

  pickAnimation = () => {
    const { enter, leave, addedTodo } = this.state

    if (enter) return styles.animateToRight
    if (leave) return styles.animateToLeft
    if (addedTodo) return styles.animateRotateFast
  }

  render() {
    const { enter } = this.state
    const { title, openInput, isMobile } = this.props

    return (
      <div className={styles.title}>
        {title}
        <i
          className={`fa fa-plus ${styles.addButton} ${this.pickAnimation()}`}
          onClick={() => {
            !enter
            ? this.setState({ enter: true, leave: false })
            : this.setState({ enter: false, leave: true })

            openInput()
          }}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
      </div>
    )
  }
}

export default Header
