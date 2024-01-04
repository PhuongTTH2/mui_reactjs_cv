import './Header.css'

const Header = () => {
  return (
    <div className="header section__padding">
      <div className="header-content">
        <h1>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="header-content-input">
          <input placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="header-content-people">
          <img src="/assets/images/gpt3/people.png" alt="" />
          <p> 1,600 people</p>
        </div>
      </div>
      <div className="header-img">
        <img src="/assets/images/gpt3/ai.png" alt="" />
      </div>
    </div>
  )
}
export default Header
