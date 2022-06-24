# memo-api
メモアプリのバックエンド


## 各dockerコンテナの起動
バックグラウンドでExpressとPostgreSQLのDockerコンテナを立ち上げます
```
$ docker-compose up -d
```

## 動作確認
curlコマンド
```
$ curl http://localhost:3000
```

## コンテナ停止&削除
```
$ docker-compose down
```

## Jest実行
コンテナ起動中にターミナルで以下を実行
```
$ docker exec -it node_express bash -c 'npm test'
```

## Sequelize

マイグレーションファイルの新規作成
```
例
$ node_modules/.bin/sequelize model:create --name user --underscored --attributes name:string,email:string,visible:boolean
```

作成されたファイルに設定を追記してからマイグレーションします。<br>
マイグレーションファイルの設定の参考<br>
qiita記事：https://qiita.com/cobot00/items/0bc0da1095e09bcd0d5f<br>
公式ドキュメント：https://sequelize.org/docs/v6/core-concepts/model-basics/#column-options

マイグレーションの実行
※envを指定しないと全ての環境に適用されてしまうので指定してください
```
$ node_modules/.bin/sequelize db:migrate --env development
```
