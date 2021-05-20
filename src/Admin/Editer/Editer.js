import React, { useState, useRef } from 'react';
import { editDish, getDish } from '../../Redux/ACTIONS/Actions';
import { useDispatch } from 'react-redux';
import { Alert } from '@material-ui/lab/';

const Editer = () => {

    //const [reg, setreg] = useState({})
    const dispatch = useDispatch();
    const [name, setname] = useState('')
    const [msg, setmsg] = useState('')
    const [carb, setcarb] = useState(0)
    const [fat, setfat] = useState(0)
    const [prot, setprot] = useState(0)
    var data = (4 * (parseFloat(carb) + parseFloat(prot)) + 9 * (parseFloat(fat))).toFixed(2)
    const cal = useRef()
    const rex = /^[A-Za-z]+$/

    //console.log(reg)
    cal.current = data

    function calle() {
        console.log(`loaded from editer`)
    }

    function call() {
        console.log(`edited`)
    }


    function sub(e) {
        e.preventDefault()
        if (!name) {
            setmsg('Enter your name')
        }
        else if (!carb && !fat && !prot) {
            setmsg('Changing atleast one of parameters will trigger an edit')
        }
        else if (!rex.test(name)) {
            setmsg('Enter a valid name')
        }
        else if (isNaN(parseInt(carb))) {
            setmsg('Enter a valid number in carb in g field')
        }
        else if (isNaN(parseInt(fat))) {
            setmsg('Enter a valid number in Fat in g field')
        }
        else if (isNaN(parseInt(prot))) {
            setmsg('Enter a valid number in Protien in g field')
        }
        else {
            setmsg("Sucessful")
            //setreg({ name, carb, fat, prot, cal })
            console.log(name, carb, fat, prot, cal)
            dispatch(editDish(call, name, carb, fat, prot, cal.current))
            setTimeout(() => { setmsg('') }, 2000)
            dispatch(getDish(calle))
        }
    }

    return (
        <div style={{ marginLeft: '9%' }} className="edit-main ">
            <div className="rowss">
                <div className="topE">Editer</div>
            </div>
            <div style={{ marginTop: '2%' }} className="rowss">
                <input className="standard" type="text" placeholder="Dish Name" onChange={(e) => setname(e.target.value)} />
            </div>
            <div style={{ marginTop: '2%' }} className="rowss">
                <input className="standard" type="text" placeholder="Carbs in g" onChange={(e) => e.target.value ? setcarb(e.target.value) : setcarb(0)} />
                <input className="standard" type="text" placeholder="Fat in g" onChange={(e) => e.target.value ? setfat(e.target.value) : setfat(0)} />
            </div>
            <div style={{ marginTop: '2%' }} className="rowss">
                <input className="standard" type="text" placeholder="Protien in g" onChange={(e) => e.target.value ? setprot(e.target.value) : setprot(0)} />
                <input className="standard short" type="text" readOnly={true} value={cal.current} />
            </div>
            <div style={{ marginTop: '15px' }} className="rowss">
                <button onClick={sub} className="but" >Edit</button>
            </div>
            {msg !== '' ? msg === "Sucessful" ? <div style={{ marginTop: '10px' }}><Alert severity="success">{msg}</Alert></div> : <div style={{ marginTop: '10px' }}><Alert severity="error">{msg}</Alert></div> : null}
        </div>
    )
}
export default Editer;