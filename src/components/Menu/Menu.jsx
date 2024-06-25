import './Menu.css'
import MenuItem from './MenuItem.jsx'
import MenuStrong from './MenuStrong.jsx'
export default function Menu(){
    return(
      <div className="menubox">
        <MenuStrong name='Компрессоры'/>
            <MenuItem name='Винтовые компрессоры'/>
            <MenuItem name='Передвижные компрессоры'/>
            <MenuItem name='Поршневые компрессоры'/>
            <MenuItem name='Дожимные компрессоры'/>
            <MenuItem name='Модульные станции'/>
            <MenuItem name='Компрессоры Б/У'/>
        <MenuStrong name='Подготовка и хранение сжатого воздуха'/>
            <MenuItem name='Осушители воздуха'/>
            <MenuItem name='Ресиверы'/>
            <MenuItem name='Магистральные фильтры'/>
            <MenuItem name='Концевые охладители'/>
            <MenuItem name='Сепораторы'/>
            <MenuStrong name='Компрессоры'/>
            <MenuItem name='Винтовые компрессоры'/>
            <MenuItem name='Передвижные компрессоры'/>
            <MenuItem name='Поршневые компрессоры'/>
            <MenuItem name='Дожимные компрессоры'/>
            <MenuItem name='Модульные станции'/>
            <MenuItem name='Компрессоры Б/У'/>
        <MenuStrong name='Подготовка и хранение сжатого воздуха'/>
            <MenuItem name='Осушители воздуха'/>
            <MenuItem name='Ресиверы'/>
            <MenuItem name='Магистральные фильтры'/>
            <MenuItem name='Концевые охладители'/>
            <MenuItem name='Сепораторы'/>
      </div>
    )
}