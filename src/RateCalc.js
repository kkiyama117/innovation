import React, {Component} from "react";
import {calc_taxed_price} from "./utils";

class RateCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            price: '',
            calculated_price: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // formに値が入った時の処理
    handleChange(e) {
        this.setState({
            [e.target.name]: (e.target.value)
        });
    }

    // ボタンクリック時にRatesの追加をする関数
    handleClick() {
        let price = calc_taxed_price(this.props.rates, new Date(this.state.date), this.state.price)
        this.setState({calculated_price: price});
    }

    render() {
        return (
            <div>
                <div>
                    <input placeholder="1999-11-07" name="date" value={this.state.date} onChange={this.handleChange}/>
                    <input placeholder="1000" name='price' value={this.state.price} onChange={this.handleChange}/>円
                    <button onClick={this.handleClick}>計算</button>
                </div>
                <div>
                    <input name="calculated_price" value={this.state.calculated_price}/>円
                </div>
            </div>
        )
    }
}

export default RateCalc;