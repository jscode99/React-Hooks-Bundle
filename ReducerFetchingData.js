import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post:{}
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'FETCH_SUCESS':
            return {
                loading: false,
                post: action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error:"Fucked up machanea.....!!!!"
            }
        default:
            return currentState;
    }
}


function ReducerFetchingData() {

    const [newState, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
              dispatch({type:'FETCH_SUCESS', payload: res.data})
            }).catch(err => {
                dispatch({type:'FETCH_ERROR' })
            })
    }, []);

    return (
        <div>
            {newState.loading ? 'Loading......' : newState.post.title}
            {newState.error ? newState.error : null}
        </div>
    )
}

export default ReducerFetchingData
