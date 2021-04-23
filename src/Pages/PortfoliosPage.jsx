import { useState } from 'react';
import Tittle from '../Components/Tittle';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import portfolios from '../Components/allportfolios';

const allCategories = ['All adaptive', ...new Set(portfolios.map(item => item.category))];


function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All adaptive'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="port-title">
                <Tittle title={'Портфолио'} span={'Portfolio'}/>
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories}/>
                <MenuItems menuItem={menuItems}/>
            </div>
        </div>
    );
}

export default PortfoliosPage;
