import './Header.css'

export default function Header(){
    return(
      <header>
        <rect className='headrect'>
            <img src="./img/logo.svg" alt = ''></img>
            <div className='headliner'>
              <a href='/' className='headlink'>Главная</a>
              <a href='/' className='headlink'>О компании</a>
              <a href='/' className='headlink'>Проекты</a>
              <a href='/' className='headlink'>Новости</a>
              <a href='/' className='headlink'>Отзывы и сертификаты</a>
              <a href='/' className='headlink'>Контакты</a></div>
            <div className='headliner'>Москва</div>
            <div className='headliner'>Пн-Пт с 8:00-18:00</div>
            <div className='headliner'>promair@mail.ru</div>
            <div className='headliner'>тг и ватс</div>
            <div className='headliner'>+7 (900) 111-22-33</div>
        </rect>
      </header>
    )
  }