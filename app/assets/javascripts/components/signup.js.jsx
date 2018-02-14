class Signup extends React.Component {
  render() {
    return (
      <form action="/signup" method="post">

        <div className="container-fluid form">
          <h1 style={{backgroundColor:'white'}}>Signup</h1>
          <label htmlFor="name"><b>Name</b></label>
          <input type="text" placeholder="Enter Name" name="name" required />

          <label htmlFor="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" required />

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />

          <label htmlFor="password_confirmation"><b>Password</b></label>
          <input type="password" placeholder="Confirm Password" name="password_confirmation" required />
              
          <button type="submit">Signup</button>
        </div>
        <div className="container-fluid" style={{backgroundColor:'white'}}>
          <span className="psw"> Already have an account ? <a href="#">Log In</a></span>
        </div>
        <div className="container-fluid" style={{backgroundColor:'white'}}>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    );
  }
}