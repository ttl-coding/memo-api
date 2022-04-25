# memo-api
メモアプリのバックエンド


## 初回に必要な処理
docker image を作成する<br>
Dockerfileのあるディレクトリで以下を実施
```
$ docker build . -t memo-api
```

## docker起動
```
$ docker run --rm -it -p 3000:3000 --name "memo-api" memo-api
```

## 動作確認
別のターミナルでcurlコマンド
```
$ curl http://localhost:3000
=> {"message":"Hello World!"}
```

## コンテナ停止&削除
docker起動中のターミナルで cmd + c

## Jest実行
コンテナ起動中に別のターミナルで以下を実行
```
$ docker exec -it memo-api bash -c 'npm test'
```
