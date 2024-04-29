import Style from './ui.module.css'
import Jade from '../assets/Item_Stellar_Jade.png';
import Acheron from '../assets/acheron_tft.png'

function Unit({unit, rarities}) {
    const getRarityClass = () => {
        switch (rarities[unit.rarity].name) {
            case 'Common': 
              return Style.common;
            case 'Uncommon':
              return Style.uncommon;
            case 'Rare':
              return Style.rare;
            case 'Epic': 
              return Style.epic;
            case 'Legendary':
              return Style.legendary;
            default:
              return ''; 
          }
    }

    const rarityClass = getRarityClass();

    return (
        <div className={`${Style.unit} ${rarityClass}`}>
            <img className = {Style.unit_image} src={unit.image}/>
            <div className={Style.unit_info}>
                <p>{unit.name}</p>
                <div className={Style.unit_cost}>
                    <img src={Jade} />
                    <p>{rarities[unit.rarity].cost}</p>
                </div>
            </div>
        </div>
    )
}

export default Unit