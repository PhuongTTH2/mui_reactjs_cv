import './Left.css'
const LeftHeader = () => {
  return (
    <div className="left-header">
      <div className="left-header-header">
        <h1>Today's</h1>
      </div>
      <div className="left-header-image">
        <img src="/assets/images/news/jordanism.png" alt="" />
        <div className="left-header-image-content">
          <a href="/page4">Test</a>
          <span>Find the real you. 3,567 Affiliates 5 months old</span>
        </div>
      </div>
      <div className="left-header-bottom">
        <p>
          Subscribes to the idea that people through life 
        </p>
      </div>
    </div>
  )
}
export default LeftHeader
