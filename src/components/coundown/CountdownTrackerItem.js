import React from 'react'
import CountdownTrackerItemValue from './CountdownTrackerItemValue'
import CountdownTrackerItemCount from './CountdownTrackerItemCount'

class CountdownTrackerItem extends React.Component {
  render() {
    return (
      <div className="CountdownTrackerItem">
        <CountdownTrackerItemValue />
        <CountdownTrackerItemCount />
      </div>
    )
  }
}

export default CountdownTrackerItem
