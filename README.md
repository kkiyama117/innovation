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
- CORSの許可を確認するようにして下さい. 
  下記APIサーバーを用いる場合はnpmのcorsパッケージによってAPIサーバー側にCORSの設定がしてあります.

## Requirement
- `npm`(or `yarn`)
- npm packages written in `package.json`
  - [`react`](https://reactjs.org/) (and some components of react)
  - [API server](https://github.com/kkiyama117/innovation_server)

## Install and deploy
1. `utils.js` の1行目の `API_SERVER_URL` を用意したAPIサーバーのものに変更します.
2.  また, `package.json` の内部の設定を変更します.
3. `npm install` or `yarn` を実行してプログラムの用意をする.
4. `yarn run build` で `build` フォルダが作成され, その内部にbuildされたjsが生成されます.

### development
上記 1,3を実行した後で `yarn start` を実行するとlocalhost:3030で起動します.

### deploy
上記4で生成された`build` フォルダ内のファイル全てをサーバーにコピーします(サーバーで作業した場合はそのままでOK).
これをApache等でデプロイしたいディレクトリにコピーし(`/var/www/html` 等),
必要に応じてAlias等の設定を行って下さい.
設定例が`lib/innovation.conf` にあります.

## Usage
実行してアクセスするとシングルページアプリケーションであるHPが表示されるのみです.
DBへのアクセス(特にPOST)に関してはAPI側でInvalidな値だと例外によって
保存できないようになっていると思います.

## Use
- OS -> Raspbian GNU/Linux 9.8 
- Apache Web server -> version 2.4.25
- node -> v11.10.1
- npm -> 6.7.0

## Licence
[MIT](https://github.com/kkiyama117/innovation/blob/master/LICENSE)

## Author
[kkiyama117](https://github.com/kkiyama117)