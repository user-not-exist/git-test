import React from 'react'
import RecoveryPasswordTitle from './RecoveryPasswordTitle'
import RecoveryPasswordText from './RecoveryPasswordText'
import RecoveryPasswordForm from './RecoveryPasswordForm'
import ConfirmButton from './ConfirmButton'

class RecoveryPassword extends React.Component {
  render() {
    return (
      <form className="RecoveryPassword">
        <RecoveryPasswordTitle />
        <RecoveryPasswordText />
        <RecoveryPasswordForm />
        <ConfirmButton />
      </form>
    )
  }
}

export default RecoveryPassword
