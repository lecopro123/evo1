import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDish } from '../../Redux/ACTIONS/Actions'
import Card from '../Cards/Cards';
import not from '../../notfound.svg';
import Footer from '../Footer/footer';

const Body = ({ name, theme, toggle }) => {

    const [load, isload] = useState(false);
    const Dish = useSelector((state) => state.Dishes)
    const dispatch = useDispatch();
    //console.log(Dish.data.filter(na => na === name).length === 0)
    //console.log(theme)
    useEffect(() => {
        function call() {
            console.log(`getting dishes`);
            isload(false);
        }
        isload(true);
        //if (localStorage.getItem('data')) { ref.current = localStorage.getItem('data'); setTimeout(() => isload(false), 1000) }
        setTimeout(() => dispatch(getDish(call)), 1000)
    }, [dispatch])
    return (

        load ?
            <div className="rowss">
                <div style={{ margin: '35px' }} className="loader"></div>
            </div>
            :

            <>
                {name === '' ?
                    <div className="card-grid">
                        {Dish.data.map((item, i) => (
                            <Card item={item} i={i} theme={theme} />
                        ))}
                    </div>
                    :
                    <div style={{ marginTop: '25px' }}>
                        {(Dish.data.filter(na => na.Name.toLowerCase() === name.toLowerCase()).length === 0) ?
                            <div className="rowss">
                                <div className="colss">
                                    <img src={not} alt="not" width="200" height="200" />
                                    <div className="top">Not Found</div>
                                </div>
                            </div>
                            :
                            Dish.data.filter(na => na.Name.toLowerCase() === name.toLowerCase()).map((item, i) => (
                                <Card item={item} i={i} theme={theme} />
                            ))}
                    </div>}
                <Footer theme={theme} toggle={toggle} />
            </>
    )
}
export default Body;