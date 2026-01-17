import { Button } from 'antd';
import React, { useEffect } from 'react';
import store from '../store/index';
import { useSelector } from 'react-redux';
import { setTemprature } from '../store/weather';

const ChildComponent2 = (props) => {
    const temprature = useSelector((state) => state.weather.temprature);
    
    useEffect(() => {
        let storedTemprature = localStorage.getItem('temprature');
        if (storedTemprature) {
            store.dispatch(setTemprature(Number(storedTemprature)));
        }
    }, []);

    const setTempratureValue = () => {
        let value = Math.floor(Math.random() * 100);
        store.dispatch(setTemprature(value));
        localStorage.setItem('temprature', value);
    };
    return (
        <div>

            <Button type="primary" onClick={setTempratureValue}>Child Component 2 Button</Button>
            <div>The temprature is {temprature}</div>
            
        </div>
    );
};

export default ChildComponent2;