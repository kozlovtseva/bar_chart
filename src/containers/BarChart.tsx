import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../store/store';
import { DataArray } from '../store/reducer';

import Bar from '../components/Bar';
// import { string } from 'prop-types';

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
            return <Bar key={index} {...bar} />;
        });
        return (
            <div>
                <div>
                    <button
                        type="button"
                        onClick={() => this.changePeriod('day')}
                    >
                        Change to day
                    </button>
                    <button
                        type="button"
                        onClick={() => this.changePeriod('month')}
                    >
                        Change to month
                    </button>
                    <button
                        type="button"
                        onClick={() => this.changePeriod('year')}
                    >
                        Change to year
                    </button>
                </div>
                {bars}
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
