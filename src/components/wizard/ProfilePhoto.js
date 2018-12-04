import React from 'react'

class ProfilePhoto extends React.Component {
  render() {
    return (
      <a href className="ProfilePhoto">
        {' '}
        <img src="images/user.png" alt="User photo" width={61} height={61} />{' '}
      </a>
    )
  }
}

export default ProfilePhoto
