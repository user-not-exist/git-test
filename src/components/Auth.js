import auth0 from 'auth0-js'
import { CLIENT_ID, DOMAIN, REDIRECT_URI } from '../constants'
import { setCookie } from 'tiny-cookie'

export const Auth = async () => {
  const auth = () => {
    const auth1 = new auth0.WebAuth({
      domain: DOMAIN,
      clientID: CLIENT_ID,
      redirectUri: REDIRECT_URI,
      responseType: 'token id_token',
      scope: 'openid',
    })
    auth.authorize()
  }

  const handleAuthentication = () => {
    auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log(authResult, 'authResult')
        setCookie('USER_TOKEN', authResult.accessToken)
        console.log(authResult)
      } else if (err) {
        console.log(err)
      }
    })
  }
  return {
    login: () => auth.authorize(),
    handleAuthentication,
  }
}
