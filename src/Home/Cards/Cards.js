import React from 'react';
import food from '../../food.jpg';
import carb from '../../carb.png';
import pro from '../../protein.png';
import fpat from '../../trans-fat.png';
import cal from '../../cal.png';
import ReactStars from 'react-stars';


const Card = ({ item, i, theme }) => {
    const th = theme ? 'topD' : 'top';
    const cm = theme ? 'card-mainD' : 'card-main';
    const ib = theme ? 'ibD' : 'ib';
    const cook = theme ? 'cookD' : 'cook';
    const cals = theme ? 'calD' : 'cal';
    return (
        <div className="rowss">
            <div className={cm}>
                <div className="rowss-e cg">
                    <img className="imgs" width="100" height="100" src={food} alt="food" />
                    <div className="colss">
                        <div style={{ fontSize: '30px', margin: '0px', marginTop: '10px' }} className={th}>{item.Name.charAt(0).toUpperCase() + item.Name.slice(1)}</div>
                        <div className="rowss cg">
                            <img className="imgs" width="45" height="45" src={cal} alt="carb" />
                            <div className={cals}>{item.Cal}</div>
                        </div>
                    </div>
                </div>
                <div className="rowss cg">
                    <div className={ib}>
                        <img className="imgs" width="50" height="50" src={carb} alt="carb" />
                        <div className="rowss attr">{item.Carbs}</div>
                    </div>
                    <div className={ib}>
                        <img className="imgs" width="50" height="50" src={pro} alt="pro" />
                        <div className="rowss attr">{item.Protien}</div>
                    </div>
                    <div className={ib}>
                        <img className="imgs" width="50" height="50" src={fpat} alt="fat" />
                        <div className="rowss attr">{item.Fat}</div>
                    </div>
                </div>
                <div style={{ margin: '15px' }} className="rowss">
                    <div className={`${ib} size rowss`}>
                        <ReactStars
                            value={item.Stars}
                            count={5}
                            size={44}
                            color2={'white'}  //#d97e79
                        />
                    </div>
                </div>
                <div style={{ margin: '15px' }} className="rowss cg">
                    <div className={cook}> Chef </div>
                    <img className="imgs" width="70" height="70" src={`//joeschmoe.io/api/v1/${item.Name}`} alt="ran" />
                </div>
            </div>
        </div>
    )
}

export default Card;