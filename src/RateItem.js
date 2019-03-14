import React, {Component} from 'react';
import {delete_rate_data} from "./utils";

class RateItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        delete_rate_data(this.props.id);
        this.props.reloadRateAPI();
    }

    render() {
        return (
            <tr key={this.props.id}>
                <th>{this.props.start_date.toISOString().substring(0, 10)}</th>
                <th>{this.props.rate * 100}%</th>
                <th>
                    <button onClick={this.handleClick}>削除</button>
                </th>
            </tr>
        );
    }
}

export default RateItem;