import './More.css';
export default function More(){
    return(
        <button className='morebutton'>
            <a style={{fontSize:14+'px',fontWeight:400}}>Смотреть ещё     </a>
            <img src='/img/symbols/arrowRight.svg' style={{stroke:'inherit',strokeWidth:'inherit'}}></img>
        </button>
    )
}