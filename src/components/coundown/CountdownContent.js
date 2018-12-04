import React from 'react'
import CountdownTitle from './CountdownTitle'
import CountdownTrackerItem from './CountdownTrackerItem'

class CountdownContent extends React.Component {
  render() {
    return (
      <div className="CountdownContent">
        <CountdownTitle />
        <CountdownTrackerItem />
      </div>
    )
  }
}

export default CountdownContent
