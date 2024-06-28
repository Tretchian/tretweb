import './More.css';
export default function ToCatalog(){
    return(
        <button className='catbutton'>
            <a style={{fontSize:14+'px',fontWeight:400}}>Перейти в каталог</a>
            <img src='/img/symbols/arrowRight.svg' style={{stroke:'inherit',strokeWidth:'inherit'}}></img>
        </button>
    )
}