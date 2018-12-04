import React from 'react'
import Steps from './Steps'

class SetupSteps extends React.Component {
  render() {
    return (
      <div className="SetupSteps">
        <div className="wrap">
          <p>Let's start with your profile setup:</p>
          <Steps />
        </div>
      </div>
    )
  }
}

export default SetupSteps
