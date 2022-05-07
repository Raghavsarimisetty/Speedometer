import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => {
        console.log(prevState)
        return {speed: prevState.speed + 10}
      })
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => {
        console.log(prevState)
        return {speed: prevState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
          className="image"
        />
        <h1 className="para">Speed is {speed}mph</h1>
        <p className="para1">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            onClick={this.onAccelerate}
            type="button"
            className="accelerate"
          >
            Accelerate
          </button>
          <button onClick={this.onBrake} type="button" className="brake">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
