import React from 'react'
import { Link } from 'gatsby'
import { Auth } from '../services/auth'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
import { getCookie } from 'tiny-cookie'

// import { Button } from 'antd'
// const StyledButton = styled(Button)`
//   && {
//     border: 2px solid red;
//   }
// `

const IndexPage = () => {
  const handleAuth = (event) => {
    event.preventDefault()
    const auth = new Auth()
    auth.login()
  }
  console.log(Auth.isAuthenticated, 'Auth.isAuthenticated')
  return (
    <Layout>
      <h1>Hi {Auth.isAuthenticated() ? getCookie('USER_NICKNAME') : 'people'}</h1>
      <p>
        {Auth.isAuthenticated() ? (
          <>
            You are logged in, so check your <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <a onClick={handleAuth}>log in</a> to see restricted content
          </>
        )}
      </p>
    </Layout>
  )
}

export default IndexPage
