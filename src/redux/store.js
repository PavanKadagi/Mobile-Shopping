import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootreducer from './RootReducer';
import productSaga from './ProductSaga';

const createSaga = createSagaMiddleware();

export const store = configureStore({
    reducer : rootreducer,
    middleware : ()=>[createSaga]
});

createSaga.run(productSaga)