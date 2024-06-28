import './News.css'
export default function News({image, text, desc, date}){
return(
<div className='newscard'>
    <img src={image}></img>
    <a className='newstext'>{text}</a>
    <a className='newsdescription'>{desc}</a>

    <div style={{display:'flex',justifyContent:'space-between',justifySelf:'flex-end',alignContent:'center'}}>
        <a href='' className='newssmalltext' >Читать далее</a>
        <a className='newssmalltext'>{date}</a>
    </div>
</div>

)
}