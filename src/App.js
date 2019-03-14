import React, { Component } from 'react';
import './styles/App.css';
import RateList from "./RateList";
import RateInput from "./RateInput";
import RateCalc from "./RateCalc";

import {get_rates_data} from "./utils";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rates: []
        };
        this.reloadRateAPI = this.reloadRateAPI.bind(this)
    }

    // Ratesを更新する関数
    reloadRateAPI() {
        get_rates_data(rates => {
            this.setState({rates: rates})
        });
    }


    // componentがMountされた時
    componentWillMount() {
        this.reloadRateAPI();
    }

    render() {
        return (
            <div className="App">
                <h1>消費税計算システム</h1>
                <h2>消費税設定の一覧</h2>
                <RateList rates={this.state.rates} reloadRateAPI={this.reloadRateAPI}/>
                <h2>消費税設定の新規登録</h2>
                <RateInput reloadRateAPI={this.reloadRateAPI}/>
                <h2>消費税計算</h2>
                <RateCalc rates={this.state.rates}/>
            </div>
        );
    }
}

export default App;
