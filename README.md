
## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## 開発ノート

### 型定義

`yarn generate` で型定義を `/src/__generated__/graphql.tsx` に出力できる。

[GraphQL Code Generator](https://www.graphql-code-generator.com/)

### schema 生成

必要に応じて WebStorm の プラグインで `/schema.graphql` に出力する。このスキーマファイルは
git管理していない。

#### WebStorm のプラグイン設定

設定ファイルは `.graphqlconfig` です。

使い方はつぎの記事を参考にしてください。

https://qiita.com/suin/items/9fa8056c742bd1923697


## ディレクトリ構成

[GraphQL, TypeScript, Reactを用いて型安全に社内システムをリニューアルした話 - Medley Developer Blog](https://developer.medley.jp/entry/2020/11/06/180208)

こちらを参考にする。

React Component は `src/components/` 配下に作成していく。