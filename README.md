# 消費税計算アプリ
任意の消費税設定に対して計算をします.

## About
JSXで記述されたReactを利用したコードを, Babelを用いてPureなJavascriptに変換した上で
Apache Web serverにデプロイしています.

## Attention
- SSLによるHTTPS化は行っていません.
こちらについては
  - Apacheで(鍵暗号のファイルを指定して)直接設定する
  - AWSのサービス(Route53等)を用いてHTTPSの設定をする
 等の方法で設定する事になるかと思います.
- 開発環境の都合等でMYSQLとほぼ同等で互換性のあるMariaDBを利用しています.

## Requirement
- `npm`(or `yarn`)
- npm packages written in `package.json`
  - [`react`]() (and some components of react)
  - [`mysql2`](https://github.com/sidorares/node-mysql2)
- MYSQL Database
- Apache Web server

## Install
### Initialize database
1. はじめにmysqlのUserを用意する.
2. `mysql -u (userの名前) -p < ./lib/initialize.sql` を実行する
3. `src/mysql.js` の DBの設定を変更する.(host, username, password)

## Usage

## Use
- Apache Web server -> version 2.4.25
- MYSQL DB -> mysql  Ver 15.1 Distrib 10.1.37-MariaDB

## Licence
[MIT]()

## Author
[kkiyama117](https://github.com/kkiyama117)