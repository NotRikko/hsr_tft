import { useEffect, useState } from 'react'
import Unit from './Unit'
import Style from './ui.module.css'
import RerollIcon from '../assets/reroll.png'
import LevelUpIcon from '../assets/lvl_up.png'
import Jade from '../assets/Item_Stellar_Jade.png';


function Shop({units, rarities, origins, classes}) {
    const [shop, setShop] = useState([]);
    const [gold, setGold] = useState(50);

    const handleShopChange = () => {
        const unitsCopy = [...units];
        for (let i = unitsCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [unitsCopy[i], unitsCopy[j]] = [unitsCopy[j], unitsCopy[i]];
        }
        const selectedUnits = unitsCopy.slice(0, 5);

        setShop(selectedUnits);
        setGold(gold-2)
    }
    
    const initialShop = () => {
        const unitsCopy = [...units];
        for (let i = unitsCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [unitsCopy[i], unitsCopy[j]] = [unitsCopy[j], unitsCopy[i]];
        }
        const selectedUnits = unitsCopy.slice(0, 5);

        setShop(selectedUnits);
    }

    const handleGoldChange = (value) => {
        setGold(gold-value);
    }

    useEffect(() => {
        initialShop();
    }, [units]);
    


    return (
        <div id={Style.bottomOverlay}>
            <div id={Style.shop_header}>
                <img src={Jade}/>
                <p>{gold}</p>
            </div>
            <div id={Style.shop}>
                <div id={Style.options}>
                    <button 
                        style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/04/22/16/87/360_F_422168779_f84mgzjfpyA9oCJnianDcXyPmFAlN42t.jpg)' }}
                        onClick={ handleShopChange }
                    >
                        <p>Reroll</p>
                        <img src={RerollIcon}/>
                    </button>
                    <button style={ {backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/89/84/88/360_F_289848861_Yo8HgvRljXTGZ7v5s3f6bYQA3hY6b3y0.jpg)' }}>
                        <p>Buy XP</p>
                        <img src={LevelUpIcon}/>
                    </button>
                </div>
                <div id={Style.units}>
                    {shop.map((unit, index) => (
                        <Unit 
                            key={index} 
                            unit={unit} 
                            rarities={rarities}
                            origins={origins}
                            classes={classes}
                            shop={shop}
                            handleGold={handleGoldChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop