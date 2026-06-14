function Login({ setIsLoggedIn }) {
  return (
    <div>
      <h1>Welcome To Login Page</h1>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </div>
  );
}

export default Login;
