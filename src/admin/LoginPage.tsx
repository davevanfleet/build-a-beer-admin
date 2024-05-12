import Image from "next/image"


const CLIENT_ID = 'app.buildabeer.buildabeer.signin'
const REDIRECT_URI = "https://local.test/apple-signin"

export const LoginPage = () => {
    const href = 'https://appleid.apple.com/auth/authorize?' +
      `client_id=${CLIENT_ID}&` +
      `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
      'response_type=code id_token&' +
      'scope=name email&' +
      'response_mode=form_post'

    return <a href={href}><Image src="/appleid_button@2x.png" alt="sign in with apple" width={200} height={32} /></a>
}