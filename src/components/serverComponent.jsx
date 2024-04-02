import React from 'react';
import { headers } from 'next/headers';

const ServerComponent = () => {
    console.log('Server');
    console.log(headers());
    return <div>ServerComponent</div>;
};

export default ServerComponent;
