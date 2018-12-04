import React from 'react'

class RecoveryPasswordForm extends React.Component {
  render() {
    return (
      <label className="RecoveryPasswordForm">
        E-mail <input type="email" name="recovery-email" />
      </label>
    )
  }
}

export default RecoveryPasswordForm
