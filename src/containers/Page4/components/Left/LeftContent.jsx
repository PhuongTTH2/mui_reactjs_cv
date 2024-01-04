import './Left.css'
const LeftContent = () => {
  const arrayLeftContent = [
    {
      name: 'The Test 1',
      img: '/assets/images/news/sophists.png',
      title: 'God is you',
      number: 3,
    },
    {
      name: 'The Study 1',
      img: '/assets/images/news/passbarn.png',
      title: 'Life is precious',
      number: 17,
    },
    {
      name: 'The Study 2',
      img: '/assets/images/news/passbarn_study.png',
      title: 'We improve you',
      number: 7,
    },
    {
      name: 'Test',
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
