import React from 'react';
import { cn } from '@bem-react/classname';

const Bar = cn('Bar');

interface Props {
    age: string;
    amount: number;
}

const BarItem: React.SFC<Props> = props => {
    return (
        <div>
            <div
                className={Bar('Column')}
                style={{ height: 4 * props.amount }}
            />
            <div className={Bar('Text')}>{props.age}</div>
        </div>
    );
};

export default BarItem;
