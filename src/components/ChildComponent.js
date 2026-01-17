import React from 'react';
import { useSelector } from 'react-redux';

const ChildComponent = (props) => {
    const { count, name } = props;
    const temprature = useSelector((state) => state.weather.temprature);

    return (
        <div>
            <div>The score of {name} is {count}</div>
            <div>The temprature is {temprature}</div>
        </div>
    );
};

export default ChildComponent;