# Demo Astro SST

`pnpm create astro@latest` に `pnpm astro add astro-sst` に [astro-sst](https://github.com/sst/astro-sst)を加え、
`pnpx sst@latest init` で AWS の Serverless サービスにデプロイを行うデモのリポジトリです。

## コンテンツ

|パス|内容|
| :------------------------ | :----------------------------------------------- |
| `/ssr` | アクセスする度に、その時の時刻が表示される |
| `/isr` | アクセス時の時刻が60秒間 CDN 上でキャッシュされる  |
| `/server-island` | `...` の部分が3秒後に変化する  |


## コマンド

※  AWS へのデプロイには、AWS アカウントと、AWS CLI が必要です。

| コマンド                   | アクション                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | 依存関係をインストール                            |
| `pnpm dev`             | ローカル開発サーバーを `localhost:4321` で開始      |
| `pnpm build`           | 本番サイトを `./dist/` にビルド          |
| `pnpm preview`         | デプロイ前にビルドをローカルでプレビュー     |
| `pnpm astro ...`       | `astro add` や `astro check` などのCLIコマンドを実行 |
| `pnpm astro -- --help` | Astro CLIのヘルプを表示                     |
| `pnpm sst-deploy` | sstを使用してAWSサーバーレスサービスにデプロイ                     |
| `pnpm sst-dev` | ローカル開発サーバーとAWSサービス（例：リンクされたバケット）を開始                     |
| `pnpm sst-deploy` | sstを使用してAWSサーバーレスサービスにデプロイ                     |
| `pnpm sst-remove` | sstを使用してAWSサーバーレスサービスからデプロイを削除                     |

## 参考資料

- [Astro on AWS with SST / Serverless](https://sst.dev/docs/start/aws/astro#serverless)
- [astro-sst](https://github.com/sst/astro-sst)

