![logo](banner.png)

# YSFLC

for Efficient book management

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

## Document

See the comments in the folder pages,components for detailed implementation  
Because I don't want to write any documentation

---

## Memo

- [x] そろそろ色しっかりしたいのでCSS係は働いてくださいという気持ち
- [ ] そろそろドキュメント作る

### Data Structure
```json
{
  "coupons" : { // クーポンが使われた集合を列記します。時間についてはunionの各要素に書いてあります
    {
      "union": ["1","5"],
      "num" : 2
    },
    ...
  },
  "isbns" : { // 本の台帳です。各本には売れたかどうか、また売れた時間のパラメーターを配合しました
    "1" : {
      "issold" : true,
      "soldtime" : 12831283612
    },
    "2" : {
      "issold" : false,
      "soldtime" : null
    },
    ...
  }
}
```