# ORIPA STATION 完成版プロトタイプ

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで以下を開く：

```bash
http://localhost:3000
```

## 含まれる画面

- ヒーローLP
- Live Pull System
- Creator BOX Marketplace
- Proof Engine
- Smart Dashboard
- Shipping / Revenue / Risk Monitor
- モバイルレスポンシブUI

## 重要

前回版でCSSが反映されなかった原因は `_app.js` がなく、`globals.css` が読み込まれていなかったことです。
この版では `pages/_app.js` を追加済みです。
