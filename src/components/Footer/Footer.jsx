import './Footer.css'

export default function Footer(){
    return(
        <>
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

                <a href='/' className='footerlink'> <img src='img/symbols/pin.svg'></img> Москва</a>
                <div><img src='img/symbols/phone.svg'></img> +7 (900) 111-22-33</div> 
                <div><img src='img/symbols/envelope.svg'></img> promair@mail.ru</div> 

                </div>    
            </div>

            <div className='bottom_part'>
            <a className='copyright'>© ООО Promair </a>

            <a href='/' className='privacy'>Политика обработки персональных данных </a>
            </div>
        </div>
         <div className='footermobile'>
         <div className='top_part'>
                <div className='top_card'>

                    <img src='img/logo.svg' alt='logo' className='logo'></img>

                    
                    <a href='/' className='footerlink'>Главная</a>
                    <a href='/' className='footerlink'>О компании</a>
                    <a href='/' className='footerlink'>Проекты</a>
                    <a href='/' className='footerlink'>Новости</a>
                    <a href='/' className='footerlink'>Отзывы и сертификаты</a>
                    <a href='/' className='footerlink'>Контакты</a>

                    <div>
                    <img src='img/logos/Facebook.svg' alt='fcb' className='top_svg'></img>    
                    <img src='img/logos/Instagram.svg' alt='ins' className='top_svg'></img>    
                    <img src='img/logos/Telegram.svg' alt='tg' className='top_svg'></img>    
                    <img src='img/logos/VK.svg' alt='vk' className='top_svg'></img>    
                    </div>


                </div>
                <div className='top_card'>

                <a href='/' className='footerlink'> <img src='img/symbols/pin.svg'></img> Москва</a>
                <div><img src='img/symbols/phone.svg'></img> +7 (900) 111-22-33</div> 
                <div><img src='img/symbols/envelope.svg'></img> promair@mail.ru</div> 

                </div>    
            </div>

         </div>
         </>
    )
}