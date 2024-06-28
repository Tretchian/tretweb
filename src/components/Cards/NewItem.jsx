import './NewItem.css'
import AddButton from '../Buttons/AddToCart.jsx'
export default function NewItem({image,text}){
return(
<div className='itemcard'>
    <img src={image}></img>
    <a className='itemtext'>{text}</a>
    <AddButton />
</div>

)

}