import './Footer.css'

export default function Footer(){
    return(
        <div className='footer'>
            <div className='top_part'>
                <div className='top_card'>

                    <img src='img/logo.svg' alt='logo' className='logo'></img>

                    <div>
                    <img src='img/logos/Facebook.svg' alt='fcb' className='top_svg'></img>    
                    <img src='img/logos/Instagram.svg' alt='ins' className='top_svg'></img>    
                    <img src='img/logos/Telegram.svg' alt='tg' className='top_svg'></img>    
                    <img src='img/logos/VK.svg' alt='vk' className='top_svg'></img>    
                    </div>

                </div>
                <div className='top_card'>

                    <a href='/' className='footerlink'>Главная</a>
                    <a href='/' className='footerlink'>О компании</a>
                    <a href='/' className='footerlink'>Проекты</a>

                </div>
                <div className='top_card'>

                    <a href='/' className='footerlink'>Новости</a>
                    <a href='/' className='footerlink'>Отзывы и сертификаты</a>
                    <a href='/' className='footerlink'>Контакты</a>

                </div>
                <div className='top_card'>

                    

                </div>
            </div>
        </div>
    )
}