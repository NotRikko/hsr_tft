import Style from './ui.module.css'
import Jade from '../assets/Item_Stellar_Jade.png';
import epic_border from '../assets/four_cost_border.png'
import legendary_border from '../assets/five_cost_border.png'
import common_border from '../assets/one_cost_border.png'
import uncommon_border from '../assets/two_cost_border.png'
import rare_border from '../assets/three_cost_border.png'

function Unit({unit, rarities, origins, classes}) {
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
    const getRarityClassBorder = () => {
      switch (rarities[unit.rarity].name) {
          case 'Common': 
            return common_border
          case 'Uncommon':
            return uncommon_border
          case 'Rare':
            return rare_border
          case 'Epic': 
            return epic_border
          case 'Legendary':
            return legendary_border
          default:
            return ''; 
        }
  }
    
    

    const rarityClass = getRarityClass();
    const rarityBorder = getRarityClassBorder();

    return (
        <div className={`${Style.unit} ${rarityClass}`}>
            <img className={Style.unit_header} src={rarityBorder}></img>
            <div className = {Style.unit_image} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.75)), url(${unit.image})`, backgroundSize: 'cover' }}>
              <ul>
                <li>{origins[unit.origin].name}</li>
                <li>{classes[unit.class].name}</li>
              </ul>
            </div>
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