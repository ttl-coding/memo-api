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
