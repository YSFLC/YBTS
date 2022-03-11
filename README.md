![logo](banner.png)

# YBTS

for Efficient book management

## Document

引継ぎ用に文章を書く予定です...！

## Memo

- [ ] そろそろドキュメント作る
- [x] リポジトリ移行

### DB(json)の構造
```json
{
  "version": "0.0.1", // バージョンです　下位互換性はありません
  "isbn": { // ISBNをkeyにして売れたかどうか、売れた時間がvalueになっています
    "1": {
      "issold": true, // true か false しか入りません
      "soldtime": 1647008335 // 時間をUnixTime(整数秒)で書いています
    },
    "2": {
      "issold": false,
      "soldtime": null
    }
  },
  "log": { // さまざまなログ
    "1647008344": { // イベント発生時間をUnixTimeで書いています
      "logtype": "E-003", // ログの種類です　https://github.com/YSFLC/YBTS/wiki/エラータイプ一覧 に詳細を書きました
      "comment": "1" // ログに付随する情報です　上URLに同じく詳細が書いてあります
    }
  }
}
```
