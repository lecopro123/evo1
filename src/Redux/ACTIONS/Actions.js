
import * as types from '../types'
import { Dishes } from '../../Data/dish'

var k = Dishes.data

export const getDish = (cb) => (
    dispatch
) => {
    dispatch({
        type: types.Dish_get,
        data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : Dishes.data,
        error: 0,
    })

    cb()
}
//console.log(k)

export const postDish = (cb, name, carb, fat, prot, cal, star) => dispatch => {
    //console.log()
    var data = { Name: name, Carbs: carb, Fat: fat, Protien: prot, Cal: cal, Stars: star }
    //console.log(k)
    k = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')).concat(data) : Dishes.data.concat(data)
    //console.log(k)
    dispatch({
        type: types.Dish_post,
        data: k,
        error: 0,
    })
    localStorage.setItem('data', JSON.stringify(k))
    cb()
}

export const editDish = (cb, name, carb, fat, prot, cal) => dispatch => {
    //var data={ Name: name, Carbs: carb, Fat: fat, Protien: prot, Cal: cal}
    k = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : Dishes.data
    for (let i = 0; i < k.length; i++) {
        if (k[i].Name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
            if (carb !== 0) {
                var old = parseFloat(k[i].Carbs) * 4
                var newi = parseFloat(carb) * 4
                var update = (parseFloat(k[i].Cal) - old) + newi
                k[i].Cal = update.toFixed(2)
                k[i].Carbs = carb
            }
            if (fat !== 0) {
                var old1 = parseFloat(k[i].Fat) * 9
                var newi1 = parseFloat(fat) * 9
                var update1 = (parseFloat(k[i].Cal) - old1) + newi1
                k[i].Cal = update1.toFixed(2)
                k[i].Fat = fat
            }
            if (prot !== 0) {
                var old2 = parseFloat(k[i].Protien) * 4
                var newi2 = parseFloat(prot) * 4
                var update2 = (parseFloat(k[i].Cal) - old2) + newi2
                k[i].Cal = update2.toFixed(2)
                k[i].Protien = prot
            }
        }
    }
    dispatch({
        type: types.Dish_edit,
        data: k,
        error: 0,
    })
    localStorage.setItem('data', JSON.stringify(k))
    cb()
}
export const delDish = (cb, name) => (
    dispatch
) => {
    var tar
    k = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : Dishes.data
    for (let i = 0; i < k.length; i++) {
        if (k[i].Name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
            tar = i;
        }
    }
    for (let i = tar; i < k.length; i++) {
        k[i] = k[i + 1];
    }
    ///console.log(k[-1] ? k : k.pop());
    k.pop()
    dispatch({
        type: types.Dish_del,
        data: k,
        error: 0,
    })
    localStorage.setItem('data', JSON.stringify(k))
    cb()
}
