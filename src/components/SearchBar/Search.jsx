import './Search.css'
export default function Search(){
    return(
        <div className="bar">
            <a className="searchText">Поиск</a>
            <img src="/img/symbols/search.svg" sizes='20px 20px' style={{paddingRight: 20+'px'}}></img>
        </div>
    )
}