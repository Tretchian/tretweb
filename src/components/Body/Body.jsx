import './Body.css'
import Menu from '../Menu/Menu.jsx'
export default function Body(){
    return(
    <>
    <div className='body'>

        <div className='menucolumn'>
            <Menu />
        </div>

        <div className='maincolumn'>
            <img src='img/main screen.png' width={805} height={287}></img>
            <img src='img/card.png' width={805} height={491}></img>
        </div>

    </div>
    </>
    )
}