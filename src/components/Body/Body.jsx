import './Body.css'
import Menu from '../Menu/Menu.jsx'
import SearchBar from '../SearchBar/Search.jsx'
export default function Body(){
    return(
    <>
    <div className='body'>

        <div className='menucolumn'>
            <Menu />
        </div>

        <div className='maincolumn'>
            <div className='searchtab'>
                <SearchBar />
                <button className='btn'>Заказать звонок</button>
                <button className='btn-cart'><img src='/img/symbols/Cart.svg'></img></button>
            </div>

            <img src='img/bg.png' className='bg' width={805} height={287} style={{marginTop:12+'px'}}></img>

            <div className='newItems'>Новинки</div>
            <div className='cardZone'>Проекты</div>
            <div className='cardZone'>Отзывы и сертификаты</div>
            <div className='cardZone'>Новости</div>
        </div>

    </div>
    </>
    )
}