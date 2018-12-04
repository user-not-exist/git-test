import React from 'react'
import FormItem from './FormItem'

class FormPersonal extends React.Component {
  render() {
    return (
      <form action className="FormPersonal">
        <p>Personal Data</p>
        <FormItem />
        <div className="FormItem">
          <label htmlFor="lastName">Last name</label> <input type="text" id="lastName" />
        </div>
        <div className="FormItem">
          <label htmlFor="email">Contact e-mail</label> <input type="email" id="email" />
        </div>
      </form>
    )
  }
}

export default FormPersonal
