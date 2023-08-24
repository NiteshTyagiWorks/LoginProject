import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

function App() {
  return (
    <div className="App">
      

      <GoogleOAuthProvider clientId="16602373273-a2ci0bcjt42b14pnj99a4e6vs2tal3j0.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            var res = jwt_decode(credentialResponse.credential);
            console.log(res);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />;
      </GoogleOAuthProvider>;
    </div>
  );
}

export default App;
