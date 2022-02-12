import "../PagesStyles/LoginSignUp.css"

export default  function Login() {

    return(
        <div className="header">
            
            <form action="/signup">
            <h2>Login</h2>
            <label for="email">Email</label>
            <input type="text" name="email" required />
            <div class="email error">some error</div>
            <label for="password">Password</label>
            <input type="password" name="password" required />
            <div class="password error"></div>
            <button>login</button>
            </form>
        </div>
    );
}