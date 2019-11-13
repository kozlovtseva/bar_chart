import React from 'react';

interface Props {
    age: string;
    amount: number;
}

const Bar: React.SFC<Props> = props => {
    return <div>{props.age}</div>;
};

export default Bar;
