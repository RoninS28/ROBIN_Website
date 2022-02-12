import "../PagesStyles/LoginSignUp.css"

export default  function Signup() {

    return(
        <form action="/signup">
        <h2>Sign up</h2>
        <label for="email">Email</label>
        <input type="text" name="email" required />
        <div class="email error"></div>
        <label for="password">Password</label>
        <input type="password" name="password" required />
        <div class="password error"></div>
        <button>Sign up</button>
        </form>
    );
}