import './Right.css'
import data from '../data/list_info_members'
const RightHeader = () => {
  return (
    <div className="right-header">
      <div className="right-header-header">
        <h1>Best NRM Matches</h1>
      </div>

      <div className="right-header-content">
        <h1>NRMs trending on our site today:</h1>
        {data.map((item) => (
          <div className="right-header-content-item">
            <img src={item.src} alt="" />
            <div className="right-header-content-item-name">
              <a>{item.name}</a>
              <span>{item.info}</span>
            </div>
            <div className="right-header-content-item-bar">
              <div className="right-header-content-item-bar-progress">
                <div style={{ width: `${item.progress}%`, background: '#c0392b' }}></div>
              </div>
              <span>{item.member}</span>
            </div>
            <div>
              <p>{item.progress}%</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
export default RightHeader
