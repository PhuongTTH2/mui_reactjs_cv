import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-link">
        <div className="navbar-logo">
          <img src={'/assets/images/gpt3/logo.svg'} alt="" />
        </div>
        <div className="navbar-container">
          <p>
            <a href="/page2">Home</a>
          </p>
          <p>
            <a href="/page2">GPT</a>
          </p>
          <p>
            <a href="/page2">AI</a>
          </p>
          <p>
            <a href="/page2">Case </a>
          </p>
          <p>
            <a href="/page2">Library</a>
          </p>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
    </div>
  )
}
export default Navbar
