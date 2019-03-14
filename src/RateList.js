import React, {Component} from "react";
import RateItem from "./RateItem";

class RateList extends Component {
    render() {
        const list = this.props.rates.map(data => {
            return <RateItem {...data} key={data.id} reloadRateAPI={this.props.reloadRateAPI}/>;
        });

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>開始日付</th>
                        <th>税率</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RateList;