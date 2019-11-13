import React from 'react';
import BarChart from './containers/BarChart';
import { cn } from '@bem-react/classname';
import './App.css';

const container = cn('Container');
const title = cn('Title');

const App: React.FC<{}> = () => {
    return (
        <div className={container()}>
            <h1 className={title()}>Количество просмотров (по возрастам)</h1>
            <BarChart />
        </div>
    );
};

export default App;
