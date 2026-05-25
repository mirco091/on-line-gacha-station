# CollectorVault - Production-Grade Oripa Platform Prototype

Solana/USDC入金 → ガチャ → 獲得品保管 → 発送 or ポイント還元 → 出品者BOX作成 → 運営管理まで、実サービスの流れを触れる高品質Webプロトタイプです。

## 使い方

GitHub Pagesなら、このフォルダの中身をリポジトリ直下に置くだけで表示できます。

- `index.html`
- `style.css`
- `script.js`
- `README.md`

## 実装済みデモ機能

- ウォレット接続デモ
- Solana/USDC入金デモ
- ポイント残高・履歴
- BOX一覧/検索/ソート
- BOX詳細・排出テーブル・Proof Hash表示
- ガチャ実行・抽選アニメーション
- 獲得品保管
- 発送依頼
- ポイント還元
- Seller StudioでBOX作成
- 景品テーブル編集
- 出品審査キュー
- 運営管理/手数料/リスク監視/ローンチチェックリスト
- localStorageによる状態保持

## 本番化で必要なもの

このzipはフロントエンドの高度プロトタイプです。本番運用には以下が必要です。

1. Solana Pay / Phantom / Solflare 連携
2. バックエンドAPI
3. DB（Supabase/PostgreSQL等）
4. 抽選ロジックのサーバーサイド化
5. 決済・ポイント台帳の二重記帳
6. 出品者KYC/本人確認
7. 景品在庫・検品・発送オペレーション
8. 法務確認（古物営業、景品表示、資金決済、賭博該当性等）
9. 不正検知・レート制限
10. 管理者認証

## 推奨本番技術構成

- Frontend: Next.js / TypeScript / Tailwind / Framer Motion
- Backend: NestJS or Hono / PostgreSQL / Prisma
- Auth: Privy or NextAuth
- Wallet: Solana Wallet Adapter / Solana Pay
- Storage: S3 compatible storage
- Queue: Cloudflare Queues / BullMQ
- Monitoring: Sentry / PostHog
