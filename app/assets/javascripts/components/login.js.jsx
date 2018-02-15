class Login extends React.Component {
  render() {
    return (
      <form action="/login" method="post">

        <div className="container-fluid form">
          <h1 style={{backgroundColor:'white'}}>Login</h1>
          <label htmlFor="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" required />

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />
          
          <div className="checkbox">
            <label><input type="checkbox" name="remember"></input> Remember me</label>
          </div>
          <button type="submit">Login</button>
        </div>
        <div className="container-fluid" style={{backgroundColor:'white'}}>
          <span className="psw"> No account yet ? <a href="#">Signp up now</a></span>
        </div>
        <div className="container-fluid" style={{backgroundColor:'white'}}>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    );
  }
}