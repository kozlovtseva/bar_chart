
import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../store/store';
import { DataArray } from '../store/reducer';


interface Props {
  data: DataArray[];
}

class BarChart extends React.Component<Props> {
    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <div>
                {/* {data &&
                characters.map(character => {
                    return (
                    <span key={character.name} className="name">
                        {character.name}
                    </span>
                    );
                })} */}
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