import './Header.css'
export default function Header(){
    return(
      <header>
            <div className='headliner'>
              <img src='img/logo.svg' alt = 'logo.png'></img>
              <a href='/' className='headlink'>Главная</a>
              <a href='/' className='headlink'>О компании</a>
              <a href='/' className='headlink'>Проекты</a>
              <a href='/' className='headlink'>Новости</a>
              <a href='/' className='headlink'>Отзывы и сертификаты</a>
              <a href='/' className='headlink'>Контакты</a>
              <a href='/' className='headlink'> <img src='img/symbols/pin.svg'></img> Москва</a>
              <div><img src='img/symbols/phone.svg'></img> +7 (900) 111-22-33</div> 
              </div>
              <div className='headlinermobile'>
                <img src='img/symbols/apps.svg' className='headlinersvg' href=''></img>
                <img src='img/symbols/search.svg' className='headlinersvg' href=''></img>
                <img src='img/logo.svg' alt = 'logo.png' className='headlinersvg' href=''></img>
                <img src='img/symbols/phone.svg' className='headlinersvg' href=''></img>
                <img src='img/symbols/Menu.svg' className='headlinersvg' href=''></img>
              </div>
      </header>
    )
  }