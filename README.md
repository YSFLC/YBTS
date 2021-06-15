![logo](banner.png)

# YSFLC

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Memo

- [x] Nuxt.jsへの移行
- [x] CL/CIを豪華にする
- [ ] 読み込み箇所をつくる
- [x] リファクタリング

### Json形式
```json
{
  "coupon" : 256,
  "$isbncode" : {
    "issold" : false,
    "soldtime" : 12831283612
  },
  ...
}
```