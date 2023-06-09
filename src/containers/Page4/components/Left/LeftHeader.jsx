import './Left.css'
const LeftHeader = () => {
  return (
    <div className="left-header">
      <div className="left-header-header">
        <h1>Today's Featured NRM</h1>
      </div>
      <div className="left-header-image">
        <img src="/assets/images/news/jordanism.png" alt="" />
        <div className="left-header-image-content">
          <a href="/page4">Jordanism</a>
          <span>Find the real you. 3,567 Affiliates 5 months old</span>
        </div>
      </div>
      <div className="left-header-bottom">
        <p>
          Jordanism subscribes to the idea that people through life hidden from their true selves and that life is a
          consistent struggle to realize one's true and enduring nature...
        </p>
      </div>
    </div>
  )
}
export default LeftHeader
