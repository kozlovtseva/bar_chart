import * as React from 'react';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';

import { AppState } from '../store/store';
import { DataArray } from '../store/reducer';

import BarItem from '../components/BarItem';

const button = cn('Button');
const chart = cn('Chart');

interface Props {
    data: DataArray;
}
type State = {
    period: string;
};

class BarChart extends React.Component<Props, State> {
    state: State = {
        period: 'day',
    };
    changePeriod = (period: string) => {
        this.setState({ period: period });
    };
    render() {
        let data;
        if (this.state.period === 'day') {
            data = this.props.data.day;
        } else if (this.state.period === 'month') {
            data = this.props.data.month;
        } else {
            data = this.props.data.year;
        }
        let bars = data.map((bar, index) => {
            return <BarItem key={index} {...bar} />;
        });
        return (
            <div>
                <div>
                    <button
                        type="button"
                        onClick={() => this.changePeriod('day')}
                        className={button()}
                    >
                        За день
                    </button>
                    <button
                        type="button"
                        onClick={() => this.changePeriod('month')}
                        className={button()}
                    >
                        За месяц
                    </button>
                    <button
                        type="button"
                        onClick={() => this.changePeriod('year')}
                        className={button()}
                    >
                        За год
                    </button>
                </div>
                <div className={chart()}>{bars}</div>
            </div>
        );
    }
}

const mapStateToProps = (store: AppState) => {
    return {
        data: store.dataState.data,
    };
};

export default connect(mapStateToProps)(BarChart);
