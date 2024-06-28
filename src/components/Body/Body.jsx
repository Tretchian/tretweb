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

            <div className='newItems'>
                <a style={{fontSize:30+'px', fontWeight:700, alignSelf:'center'}}>Новинки</a>
            </div>
            <div className='cardZone'>
                <a style={{fontSize:30+'px', fontWeight:700, alignSelf:'flex-start'}}>Проекты</a>
            </div>
            <div className='cardZone'>
                <a style={{fontSize:30+'px', fontWeight:700, alignSelf:'flex-start'}}>Отзывы и сертификаты</a>
            </div>
            <div className='cardZone'>
                <a style={{fontSize:30+'px', fontWeight:700, alignSelf:'flex-start'}}>Новости</a>
            </div>
            
        </div>

    </div>
    </>
    )
}