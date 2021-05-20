import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDish, delDish } from '../../Redux/ACTIONS/Actions'


const Table = () => {

    const [load, isload] = useState(false);
    const Dish = useSelector((state) => state.Dishes)
    const dispatch = useDispatch();
    // var lo = localStorage.getItem('data') ? localStorage.getItem('data') : 0;

    function del(e) {
        function call() {
            console.log(`deleted`)
        }
        dispatch(delDish(call, e.currentTarget.id))
        getter();
    }

    function getter() {
        function call() {
            console.log(`getting dishes`);
            isload(false);
        }
        isload(true);
        //if (localStorage.getItem('data')) { ref.current = localStorage.getItem('data'); setTimeout(() => isload(false), 1000) }
        setTimeout(() => dispatch(getDish(call)), 1000)
    }

    useEffect(() => {
        function call() {
            console.log(`getting dishes`);
            isload(false);
        }
        isload(true);
        //if (localStorage.getItem('data')) { ref.current = localStorage.getItem('data'); setTimeout(() => isload(false), 1000) }
        setTimeout(() => dispatch(getDish(call)), 1000)
    }, [dispatch])

    //dat.current = ref.current ? JSON.parse(ref.current) : Dish.data

    //console.log(dat.current)

    return (
        <div style={{ marginLeft: '3%', overflow: 'auto' }} className="table-main ">
            <div className="rowss">
                <div className="top">Table</div>
            </div>
            <div className="rowss">
                {load ?
                    <div style={{ marginTop: '35px' }} className="loader"></div>
                    :
                    <table className="dish">
                        <thead>
                            <tr>
                                <th>Dish Name</th>
                                <th>Carbs</th>
                                <th>Fat</th>
                                <th>Protien</th>
                                <th>Calorie</th>
                                <th>Stars</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Dish.data.map((item, key) =>
                                <tr key={key}>
                                    <td>{item.Name}</td>
                                    <td>{item.Carbs}</td>
                                    <td>{item.Fat}</td>
                                    <td>{item.Protien}</td>
                                    <td>{item.Cal}</td>
                                    <td>{item.Stars}</td>
                                    <td><div id={item.Name} onClick={del} ><i className="fa fa-minus-circle" style={{ fontSize: '26px', cursor: 'pointer' }}></i></div></td>
                                </tr>
                            )}
                        </tbody>
                    </table>}
            </div>
        </div>
    )
}
export default Table;