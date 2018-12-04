import React from 'react'

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo">
        <a className="Link" href="/">
          <img src="images/ketogains-logo.png" alt="Ketogains logo" width={304} height={68} />
        </a>
      </div>
    )
  }
}

export default Logo
