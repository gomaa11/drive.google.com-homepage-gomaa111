

export default function Home(){

    
    return(
      <div className="container">
      <div className="box">
      <div className="contain">
            <div className="logo">
            <svg className="im" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
<path fill="#FFC107" d="M17 6L31 6 45 30 31 30z"></path><path fill="#1976D2" d="M9.875 42L16.938 30 45 30 38 42z"></path><path fill="#4CAF50" d="M3 30.125L9.875 42 24 18 17 6z"></path>
</svg>
            </div>
            <div className="info">
        <h2>Change password</h2>
        <p>You may be signed out of your account on some devices. You can see more information about devices that will not be registered

When you leave her..</p>
        <p></p>
        <form>
        <div className="inputBox">
          <input type="password" name="password" required/>
          <label>New Password</label>
          <p>How strong is your password?</p>
          <p>Please use at least 8 characters. You should not use a password from another website or a password that is easy to know, e.g

Your date of birth. Why ? ?</p>
<div className="inputBox2">
          <input type="password" name="password" required/>
          <label>Confirm the new password.</label>
          
        </div>
        </div>
       
        <input type="submit" name="sign-in" value="change password" />
      </form>
            </div>
            <div className="footer">
            </div>
          </div>
          </div>
          </div>
    )
}
