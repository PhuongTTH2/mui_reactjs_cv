import './Header.css'

const Header = () => {
  return (
    <div className="header ">
      <div className="header-content">
        <h1>
          Launch Your Dev Career With <span className="gradient__text">Project-Based</span> Coaching
        </h1>
        <p>Showcase your skills with practical development experience and land the coding career of your dreams</p>
        <div className="header-content-button">
          <button>Explore Courses</button>
        </div>
      </div>
      <div className="header-img">
        <img src={'/assets/images/page1-herobg.png'} alt="" />
      </div>
    </div>
  )
}
export default Header
