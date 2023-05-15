import {takeEvery,put} from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './Constant';
import { url } from '../App';
import axios from 'axios';

function* getData(){
    let data = yield axios.get(`${url}/products`);
    console.log('-----',data);
    data = yield data.data;
    yield put({type:SET_PRODUCT_LIST,data})
}


export default function* productSaga(){
    yield takeEvery(PRODUCT_LIST,getData);
}