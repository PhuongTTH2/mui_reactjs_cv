import './Left.css'
const LeftContent = () => {
  const arrayLeftContent = [
    {
      name: 'The Sophists Union',
      img: '/assets/images/news/sophists.png',
      title: 'God is you',
      number: 3,
    },
    {
      name: 'Passbarn Study Union',
      img: '/assets/images/news/passbarn.png',
      title: 'Life is precious',
      number: 17,
    },
    {
      name: 'Passbarn Study Union',
      img: '/assets/images/news/passbarn_study.png',
      title: 'We improve you',
      number: 7,
    },
    {
      name: 'Sophistry Collective',
      img: '/assets/images/news/sophistry_collective.png',
      title: 'Life is precious',
      number: 5,
    },
  ]
  return (
    <div className="left-content">
      <div className="left-content-header">
        <h1>You Joined</h1>
      </div>
      {arrayLeftContent.map((item) => (
        <div className="left-content-image">
          <img src={item.img} alt="" />
          <div className="left-content-image-content">
            <a href="/page4">{item.name}</a>
            <span>{item.title}</span>
          </div>
          <div className="left-content-bottom">{item.number}</div>
        </div>
      ))}
    </div>
  )
}
export default LeftContent
