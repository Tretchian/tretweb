import './Header.css'
export default function Header(){
    return(
      <header>
        <div className='headrect'>
          <div className='head'>
            <div className='headliner'>
              <img src='img/logo.svg' alt = 'logo.png'></img>
              <a href='/' className='headlink'>Главная</a>
              <a href='/' className='headlink'>О компании</a>
              <a href='/' className='headlink'>Проекты</a>
              <a href='/' className='headlink'>Новости</a>
              <a href='/' className='headlink'>Отзывы и сертификаты</a>
              <a href='/' className='headlink'>Контакты</a>
              <div className='headlink'>
              <div>
              <img src='img/pin.svg'></img>Москва
              </div>
            </div> 
            <div className='headliner'>
              <div>
                <img src='img/phone.svg'></img>+7 (900) 111-22-33</div> 
              </div>
          </div>
            </div>
            
         </div>
      </header>
    )
  }