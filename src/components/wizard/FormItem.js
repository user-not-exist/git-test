import React from 'react'

class FormItem extends React.Component {
  render() {
    return (
      <div className="FormItem">
        <label htmlFor="name">Name</label> <input type="text" id="name" />
      </div>
    )
  }
}

export default FormItem
