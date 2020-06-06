# メモ
- classとfunctionのコンポーネントを組み合わせる
  - classのコンポーネント
    - construdtorはコンストラクタ
    - render()は画面にレンダリングする
      - jsxで書くことができる
        - jsx == HTMLとJSの合体技
  - functionのコンポーネント
    - renderだけをおこなう
  - 親コンポーネントから子に渡された値はすべて props に入っている
- this.state に直接代入してよい唯一の場所はコンストラクタ
- PropTypesはpropの型指定
- http://yucatio.hatenablog.com/entry/2018/09/21/225716
  - reduxのconnectの説明
- ステートレスのコンポーネントが良い
  - 再利用しやすい
  - 状態を持たないコンポーネント
- setStateで状態を更新
- stateはconstroctorでもたせとく
- sortはlodash
- ソートするときの手順
  - 配列で取得する
  - 取得した配列とソートキー(どのプロパティでソートするか)をlodashにわたす
  - 返ってきたソート済みの配列を画面に表示
  - 表示したあとソートする場合
    - イベント発生
    - stateの中身と何でソートするかをlodashの関数に渡す
    - 返ってきた値に勝手に変わる
- APIのリクエストはdomainフォルダ？？
- presentational component
  - レンダリングだけする
- container component
  - Logicも入っている
- middlewareはactionとreducerの間
- Store -> dispatch -> viewで何かイベント -> action -> 
- 場合によってはmiddleware -> reducerでstoreの内容を変更
- ディレクトリ構成
  - https://medium.com/@hokan_dev/react%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90%E8%A9%A6%E8%A1%8C%E8%A8%98-6a07fabfe39c
- 名前つきエクスポートとデフォルトエクスポートがある
  - importの仕方がかわる
    - 名前付き: import { 名前 } from ファイル名(拡張子なし)
    - デフォルト: import 適当な名前 from ファイル名(拡張子なし)
  - export default foo でデフォルトエクスポート
- importは2回書いても1回しか実行されない
- webpack
  - npm init
  - npm i -D webpack webpack-cli
- webpackを使う場合もtsconfigも一部機能は使用される
- styled componentsをtypeScriptと使う場合は@types/styled-componentsも必要
- 

## React + Redux + Typescriptの環境構築

- reactをインストール (typescriptを利用)
```
npx create-react-app original --typescript
```

- reduxをインストール
```
yarn add redux react-redux react-router-dom
  - SPAでない場合は、react-router-domは不要
```

- 開発サーバを起動
```
yarn start
```

```
yarn add @material-ui/core

```

## Reduxを使用したときの流れ
- ルートで使えるようにする
  - Providerタグですべてを囲む
    - storeにデータを紐付ける
  - storeではcombineReducersでreducerを紐付ける