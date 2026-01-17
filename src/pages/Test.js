import { Button } from 'antd';
import React from 'react';
import { useState } from 'react';
import ChildComponent from '../components/ChildComponent';
import ChildComponent2 from '../components/ChildComponent2';

const Test = () => {

    let [count, setCount] = useState(0);

    function testCount() {
        count += 1;
        setCount(count);
        alert("Count is: " + count);
        return count;
    }

    return (
        <div>
            <div>{count}</div>
            <Button type="primary" onClick={testCount}>Test Count</Button>
            <ChildComponent count={count} name="Sucre"></ChildComponent>
            <ChildComponent2></ChildComponent2>
        </div>
    );
};

export default Test;