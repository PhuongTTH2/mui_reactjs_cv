import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <div>Logo</div>
        </div>
        <div className="header-link">
          <ul>
            <li>
              <a href="#">
                <img src="/assets/images/news/folder_96px.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/images/news/create_96px.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/assets/images/news/speech_96px.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="header-input">
          <div>
            <input placeholder="Search" />
            <img src="/assets/images/news/search_reverse_96px.png" alt="" />
          </div>
        </div>
        <div className="header-account">
          <span>HP</span>
          <p>Your name</p>
        </div>
        <div className="header-form">
          <div className="header-line-1">
            <p>Quote of the Day</p>
          </div>
          <div>
            <p>Create a template at the top of the header.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
