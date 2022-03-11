![logo](banner.png)

# YBTS

for Efficient book management

## Document

引継ぎ用に文章を書く予定です...！

---

## Memo

- [ ] そろそろドキュメント作る
- [x] リポジトリ移行

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
