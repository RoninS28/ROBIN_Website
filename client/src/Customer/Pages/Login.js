// import "../PagesStyles/LoginSignUp.css"

export default  function Login() {

    return(
        <div className="header">
            
            <form action="/signup" style={{width: '360px',margin: '0 auto',padding: '30px',boxShadow: '1px 2px 3px rgba(0,0,0,0.1)',
            borderRadius: '10px',background: 'white'}}>
            <h2 style={{fontSize: '2.4em',fontWeight: '750',marginBottom: '40px'}}>Login</h2>
            <label for="email" style={{display: 'block',margin: '20px 0 10px'}}>Email</label>
            <input type="text" name="email" required style={{padding: '10px 12px',borderRadius: '4px',border: '1px solid #ddd',fontSize: '1em',width: '100%'}}/>
            <div class="email error" style={{color: '#ff0099',margin: '10px 2px',fontSize: '0.8em',fontWeight: 'bold'}}>some error</div>
            <label for="password" style={{display: 'block',margin: '20px 0 10px'}}>Password</label>
            <input type="password" name="password" required style={{padding: '10px 12px',borderRadius: '4px',border: '1px solid #ddd',fontSize: '1em',width: '100%'}}/>
            <div class="password error"></div>
            <button style={{marginTop: '30px',
  borderRadius: '36px',
  background: '#FEE996',
  border:'0',
  textTransform: 'uppercase',
  fontWeight: '700',
  fontSize: '0.8em',
  display: 'block',
  padding: '10px 16px',
  letterSpacing: '2px'}}>login</button>
            </form>
        </div>
    );
}