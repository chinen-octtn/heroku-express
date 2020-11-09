# HerokuでHTMLをデプロイする

## 1. ブラウザでHerokuにログインして、new appを作成
https://jp.heroku.com/

## 2. Gitリポジトリをクローンして設定ファイルを追加
new appが作成できたら、「Settings」の「Heroku git URL」でGitリポジトリをローカルにcloneする。
SourcetreeでもターミナルでもどちらでもOK。

Gitリポジトリは空の状態になっているので、
このリポジトリのファイル（.git以外）をコピーする。

そのままHerokuのGitリポジトリにプッシュする。

自動的にデプロイされる。

## 完了
「Settings」のDomainsに記載のURLで、公開されたページが見れる。

## 補足

### 公開ディレクトリ - public
このリポジトリのファイルでは、`public` ディレクトリ直下がドキュメントルートとして公開される。
ディレクトリを変更したいときは、`/server.js` の変数を変更する。

```
const docRoot = __dirname + '/public' // 公開ディレクトリ
```

### 注意
`/package.json` の `"dependencies"` に、Heroku用の express のパッケージの記述がある。
gulpや webpack等で自作の package.jsonがある場合は、上書きしないように注意すること。
もしどちらもルート直下に置きたい場合は、自作の package.jsonの `"dependencies"` に下記を追加するとOK。

```
"express": "~3.3.4"
```

--

## SSIを使いたい
このリポジトリのSSIブランチのファイルを使う（server.js、package.json）
https://github.com/chinen-octtn/heroku-express/tree/ssi


## ベーシック認証を使いたい
1. Herokuのダッシュボードから「Settings」を開く。
2. Config Varsで、「Reveal Config Vars」ボタンを押すと入力枠が表示される。

### 認証ID
KEYに USER と入力し、VALUEに認証用のユーザー名を入力。

### 認証パスワード
KEYに PASS と入力し、VALUEに認証用のパスワードを入力。
