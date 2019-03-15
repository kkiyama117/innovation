const API_SERVER_URL = "http://home.hinatan.jp/api";

// API server からRateのデータを取得
function get_rates_data(callback) {
    fetch(API_SERVER_URL, {
        method: 'GET',
        headers: {'content-type': 'application/json'},
    }).then(res => {
        return res.json();
    }).then(res => {
        const rates = res.map(x => {
            return {
                id: x.id,
                start_date: new Date(x.start_date),
                rate: x.rate
            }
        });
        callback(sort_rates_filter(rates));
        callback(rates);
    });
}

function post_rate_data(start_date_str, rate) {
    const obj = {start_date: start_date_str, rate: Number(rate) * 0.01};
    console.log(obj);
    fetch(API_SERVER_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then((res) => res.json()).then(console.log).catch(console.error);
}

// 与えられたIDのrateを削除
function delete_rate_data(id) {
    fetch(API_SERVER_URL + "/" + id, {
        method: 'DELETE',
    }).then((res) => res.json()).then(console.log).catch(console.error);
}

// 与えられたArrayをそのstart_date属性でソートします
function sort_rates_filter(rates) {
    return rates.sort(function (a, b) {
        if (a.start_date < b.start_date) {
            return -1;
        } else if (a.start_date > b.start_date) {
            return 1;
        } else {
            return 0;
        }
    });
}

// 税込み計算
function calc_taxed_price(rates, date, price) {
    let rate_data = get_rates_from_date_str(rates, date);
    let rate = rate_data.rate;
    return Math.round((1 + Number(rate)) * price);
}

// 日付 から対応する税率を返す
function get_rates_from_date_str(rates, date_str) {
    const date = new Date(date_str);
    let rates_data_before_date = rates.filter(item => item.start_date < date);
    let rate_data = sort_rates_filter(rates_data_before_date).slice(-1)[0];
    if (typeof rate_data === "undefined") {
        return {rate: 0};
    } else {
        return rate_data;
    }
}

export {get_rates_data, post_rate_data, delete_rate_data, sort_rates_filter, calc_taxed_price};
