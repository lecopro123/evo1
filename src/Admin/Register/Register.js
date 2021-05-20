import React, { useState, useRef } from 'react';
import ReactStars from 'react-stars'
import { Alert } from '@material-ui/lab/';
import { postDish, getDish } from '../../Redux/ACTIONS/Actions';
import { useDispatch } from 'react-redux';

const Register = () => {

    //const [reg, setreg] = useState({})
    const [name, setname] = useState('')
    const [msg, setmsg] = useState('')
    const [carb, setcarb] = useState(0)
    const [fat, setfat] = useState(0)
    const [prot, setprot] = useState(0)
    const [star, setstar] = useState(0)
    var data = (4 * (parseFloat(carb) + parseFloat(prot)) + 9 * (parseFloat(fat))).toFixed(2)
    const cal = useRef()
    const dispatch = useDispatch()
    const rex = /^[A-Za-z]+$/

    //console.log(reg)
    cal.current = data

    function call() {
        console.log(`posted`)
    }

    function ref() {
        console.log(`loaded from Reg`)
    }

    function sub(e) {
        e.preventDefault()
        if (!name) {
            setmsg('Enter Dish name')
        }
        else if (!rex.test(name)) {
            setmsg('Enter a valid name')
        }
        else if (!carb) {
            setmsg('Carb in g field has no value')
        }
        else if (isNaN(parseInt(carb))) {
            setmsg('Enter a valid number in carb in g field')
        }
        else if (!fat) {
            setmsg('Fat in g field has no value')
        }
        else if (isNaN(parseInt(fat))) {
            setmsg('Enter a valid number in Fat in g field')
        }
        else if (!prot) {
            setmsg('Protien in g field has no value')
        }
        else if (isNaN(parseInt(prot))) {
            setmsg('Enter a valid number in Protien in g field')
        }
        else {
            setmsg("Sucessful")
            dispatch(postDish(call, name, carb, fat, prot, cal.current, star))
            setTimeout(() => { setmsg('') }, 2000)
            dispatch(getDish(ref))
        }
    }

    return (
        <div style={{ marginLeft: '9%' }} className="add-main ">
            <div className="rowss">
                <div className="top">Register</div>
            </div>
            <div style={{ marginTop: '2%' }} className="rowss">
                <input className="standard" type="text" placeholder="Dish Name" onChange={(e) => setname(e.target.value)} />
            </div>
            <div style={{ marginTop: '2%' }} className="rowss">
                <input className="standard" type="text" placeholder="Carbs in g" onChange={(e) => e.target.value ? setcarb(e.target.value) : setcarb(0)} />
            </div>
            <div style={{ marginTop: '2%' }} className="rowss">
                <input className="standard" type="text" placeholder="Fat in g" onChange={(e) => e.target.value ? setfat(e.target.value) : setfat(0)} />
            </div>
            <div style={{ marginTop: '2%' }} className="rowss">
                <input className="standard" type="text" placeholder="Protien in g" onChange={(e) => e.target.value ? setprot(e.target.value) : setprot(0)} />
            </div>
            <div style={{ marginTop: '2%' }} className="rowss">
                <input className="standard short" type="text" readOnly={true} value={cal.current} />
                <ReactStars
                    name='3'
                    value={star}
                    count={5}
                    onChange={(star) => setstar(star)}
                    size={30}
                    color2={'black'}
                />
            </div>
            <div style={{ marginTop: '20px' }} className="rowss">
                <button onClick={sub} className="but" >Submit</button>
            </div>
            {msg !== '' ? msg === "Sucessful" ? <div style={{ marginTop: '10px' }}><Alert severity="success">{msg}</Alert></div> : <div style={{ marginTop: '10px' }}><Alert severity="error">{msg}</Alert></div> : null}
        </div>
    )
}
export default Register;