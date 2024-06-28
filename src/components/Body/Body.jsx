import './Body.css'
import Menu from '../Menu/Menu.jsx'
import Advert from '../Advert/Advert.jsx'
import SearchBar from '../SearchBar/Search.jsx'
import MoreButton from '../Buttons/More.jsx'
import NewsCard from '../Cards/News.jsx'
import ItemsCard from '../Cards/NewItem.jsx'
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
                {/*продажа компрессоров с ценой производителя*/}
               <Advert />

            <div className='newItems'>
                <a style={{fontSize:30+'px', fontWeight:700, alignSelf:'center',marginBottom:20+'px'}}>Новинки</a>
                <div style={{display:'flex',justifyContent:"space-between"}}>
                    <ItemsCard image={'/img/comp.png'} text='Бензиновый генератор RATO R8000ID' />
                    <ItemsCard image={'/img/comp2.png'} text='Бензиновый генератор RATO R3500I' />
                    <ItemsCard image={'/img/comp3.png'} text='Бензиновый генератом RATO R2500IS' />
                    <ItemsCard image={'/img/comp4.png'} text='Бензиновый генератом RATO R6000E-L2' />
                </div>
            </div>
            <div className='cardZone'>
                <div className='toplane'>
                <a style={{fontSize:30+'px', fontWeight:700, alignSelf:'flex-start'}}>Проекты</a>
                <MoreButton />
                </div>
                <div className='botlane'>
                    <img src='/img/symbols/Left.svg'></img>
                    <div className='project'>
                        <img src='/img/project 20.png'></img>
                        <a style={{fontSize:'inherit',color:'inherit',fontWeight:'inherit',paddingTop:5+'px'}}>Поставка МКС для Стойленского ГОК</a>
                    </div>

                    <div className='project'>
                        <img src='/img/project 21.png'></img>
                        <a style={{fontSize:'inherit',color:'inherit',fontWeight:'inherit',paddingTop:5+'px'}}>Спецзаказ для конструкторского бюро машиностроения в Коломне</a>
                    </div>

                    <div className='project'>
                        <img src='/img/project 22.png'></img>
                        <a style={{fontSize:'inherit',color:'inherit',fontWeight:'inherit',paddingTop:5+'px'}}>Инженерное решение для торгового дома «Балбес»</a>
                    </div>
                <img src='/img/symbols/Right.svg'></img>
                </div>
            </div>
            <div className='cardZone'>
                <div className='toplane'>
                    <a style={{fontSize:30+'px', fontWeight:700, alignSelf:'flex-start'}}>Отзывы и сертификаты</a>
                    <MoreButton />
                </div>
                <div className='botlane'>
                    <img src='/img/symbols/Left.svg'></img>
                        <img src='/img/certificates/certificate1.png' className='certificate'></img>
                        <img src='/img/certificates/certificate2.png' className='certificate'></img>
                        <img src='/img/certificates/certificate3.png' className='certificate'></img>
                        <img src='/img/certificates/certificate4.png' className='certificate'></img>
                        <img src='/img/certificates/certificate5.png' className='certificate'></img>
                        <img src='/img/certificates/certificate6.png' className='certificate'></img>
                    <img src='/img/symbols/Right.svg'></img>
                </div>
            </div>
            <div className='cardZone'>
                <div className='toplane'>
                    <a style={{fontSize:30+'px', fontWeight:700, alignSelf:'flex-start'}}>Новости</a>
                    <MoreButton />
                </div>
                <div className='botlane'>
                <img src='/img/symbols/Left.svg'></img>

                <NewsCard image={'/img/newItem.png'} text={'Каталог пополнился продукцией для воздухоподготовки ARIACOM'} desc={'Продукция итальянской компании ARIACOM '} date={'20.01.2022'}/>
                <NewsCard image={'/img/newItem1.png'} text={'Расширен выбор спиральных компрессоров Remeza'} desc={'Добавлены новинки в ассортимент производителя Remeza.'} date={'23.08.2022'}/>
                <NewsCard image={'/img/newItem2.png'} text={'Пополнен ассортимент компрессоров Atmos'} desc={'Добавлены новинки в ассортимент производителя Atmos.'} date={'05.02.2022'}/>

                <img src='/img/symbols/Right.svg'></img>
                </div>
            </div>
            
        </div>

    </div>
    </>
    )
}