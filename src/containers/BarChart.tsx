import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../store/store';
import { DataArray } from '../store/reducer';

import Bar from '../components/Bar';

interface Props {
    data: DataArray;
}

class BarChart extends React.Component<Props> {
    render() {
        let bars = this.props.data.day.map((bar, index) => {
            return <Bar key={index} {...bar} />;
        });
        return <div>{bars}</div>;
    }
}

const mapStateToProps = (store: AppState) => {
    return {
        data: store.dataState.data,
    };
};

export default connect(mapStateToProps)(BarChart);
