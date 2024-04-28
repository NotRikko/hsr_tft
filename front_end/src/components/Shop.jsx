import Unit from './Unit'
import Style from './ui.module.css'
import RerollIcon from '../assets/reroll.png'
import LevelUpIcon from '../assets/lvl_up.png'
import Jade from '../assets/Item_Stellar_Jade.png';


function Shop() {
    return (
        <div id={Style.bottomOverlay}>
            <div id={Style.shop_header}>
                <img src={Jade}/>
                <p>50</p>
            </div>
            <div id={Style.shop}>
                <div id={Style.options}>
                    <div style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/04/22/16/87/360_F_422168779_f84mgzjfpyA9oCJnianDcXyPmFAlN42t.jpg)' }}>
                        <p>Reroll</p>
                        <img src={RerollIcon}/>
                    </div>
                    <div style={ {backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/89/84/88/360_F_289848861_Yo8HgvRljXTGZ7v5s3f6bYQA3hY6b3y0.jpg)' }}>
                        <p>Buy XP</p>
                        <img src={LevelUpIcon}/>
                    </div>
                </div>
                <div id={Style.units}>
                    <Unit />
                    <Unit />
                    <Unit />
                    <Unit />
                    <Unit />
                </div>
            </div>
        </div>
    )
}

export default Shop