import './Feature.css'
interface Props{
    title: any
    text: any
}
const Feature = (props: Props) =>{
    const { title, text } = props
    return (
        <div className='feature-info'> 
            <div className='feature-title'>
                <div/>
                <h1>{title}</h1>
            </div>
            <div className='feature-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature