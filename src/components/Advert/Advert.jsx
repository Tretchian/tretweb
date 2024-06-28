import './Advert.css'
import ToCatalog from '../Buttons/ToCatalog.jsx'
export default function Advert(){
    return(
        <>
         <div className='bg' >
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',marginLeft:5+'%'}}>
                {/*  */}
                <a style={{color:'white',fontSize:40+'px',fontWeight:700}}>Продажа компрессоров по ценам производителя</a>
                <a style={{color:'white',fontSize:20+'px',fontWeight:400}}>14 лет на рынке компрессорного оборудования</a>
                <ToCatalog />
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',marginRight:5+'%',maxWidth:'min-content'}}>
                {/*  */}
                <img src='/img/ad.png' width={177}></img>
                <a style={{color:"#FFFFFFCC",fontSize:14+'px',fontWeight:400}}>Поршневой компрессор REMEZA СБ4/С-24.OLD15</a>
            </div>
         </div>
        </>
    )
}