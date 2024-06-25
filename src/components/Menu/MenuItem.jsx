import './Menu.css'
export default function MenuItem(props){
    return(
      <a href="/" className='menuItem'>{props.name}
      </a>
    )
}