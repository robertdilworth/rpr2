import React from 'react';
import GoogleLogin from 'react-google-login';

const GoogleSignIn = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const responseGoogle = async (response) => {
    console.log(response);
    const token = response.tokenId;

    // Send token to your backend for verification
    const res = await fetch('http://localhost:8000/social-auth/google-oauth2/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Register with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default GoogleSignIn;
