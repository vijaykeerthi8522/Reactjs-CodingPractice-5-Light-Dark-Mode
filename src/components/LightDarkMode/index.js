// Write your code here
// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

/*
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Light Mode'}

  changeToLightMode = () => {
    this.setState(prevState => ({mode: 'Dark Mode'}))
  }

  changeToDarkMode = () => {
    this.setState(prevState => ({mode: 'Light Mode'}))
  }

  renderAuthButton = () => {
    const {mode} = this.state
    if (mode === 'Light Mode') {
      return (
        <div className="light-card-container">
          <h1 className="light-heading">Click To Change Mode</h1>
          <button
            className="btn"
            type="button"
            onClick={this.changeToLightMode}
          >
            {mode}
          </button>
        </div>
      )
    }
    return (
      <div className="dark-card-container">
        <h1 className="dark-heading">Click To Change Mode</h1>
        <button className="btn" type="button" onClick={this.changeToDarkMode}>
          {mode}
        </button>
      </div>
    )
  }

  render() {
    return <div className="light-bg-container">{this.renderAuthButton()}</div>
  }
}

export default LightDarkMode

*/
