import React, {Component} from "react";
import {post_rate_data} from "./utils";

class RateInput extends Component {
    constructor(props) {
        super(props);
        // formの値
        this.state = {
            start_date: '',
            rate: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // formに値が入った時の処理
    handleChange(e) {
        this.setState({
            [e.target.name]: (e.target.value)
        });
    }

    // ボタンクリック時にRatesの追加をする関数
    handleClick() {
        post_rate_data(this.state.start_date, this.state.rate);
        this.props.reloadRateAPI();
    }

    render() {
        return (
            <div>
                <input placeholder="1998-01-17" name="start_date" value={this.state.start_date}
                       onChange={this.handleChange}/>
                <input placeholder="3" name="rate" value={this.state.rate} onChange={this.handleChange}/>%
                <button onClick={this.handleClick}>登録</button>
            </div>
        )
    }
}

export default RateInput;