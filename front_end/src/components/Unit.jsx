import Style from './ui.module.css'
import Jade from '../assets/Item_Stellar_Jade.png';

function Unit() {
    return (
        <div className={Style.unit}>
            <img className = {Style.unit_image} src='https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/honkai-star-rail-s-acheron-may-have-more-than-one-identities.jpg'/>
            <div className={Style.unit_info}>
                <p>Acheron</p>
                <div className={Style.unit_cost}>
                    <img src={Jade} />
                    <p>4</p>
                </div>
            </div>
        </div>
    )
}

export default Unit