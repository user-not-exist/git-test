import React from 'react'
import CountdownHeader from './CountdownHeader'
import RecoveryPassword from './RecoveryPassword'

class CountdownWrap extends React.Component {
  render() {
    return (
      <div className="CountdownWrap">
        <CountdownHeader />
        <RecoveryPassword />
      </div>
    )
  }
}

export default CountdownWrap
