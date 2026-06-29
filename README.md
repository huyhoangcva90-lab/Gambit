# Your Universe — 9 Apps Hub

Bộ 9 mini-app cá nhân chạy hoàn toàn trên trình duyệt, không cần server.

## Mở nhanh

Mở file `index.html` hoặc deploy lên **GitHub Pages**:

1. Tạo repo mới trên GitHub
2. Push toàn bộ thư mục này lên
3. Settings → Pages → Source: **Deploy from branch** → `main` / `/ (root)`

Truy cập: `https://<username>.github.io/<repo>/`

## Ứng dụng

| Ô trên hub | File | Mô tả |
|---|---|---|
| Nhịp sinh học | `apps/routine.html` | Routine sáng/trưa/tối + timer từng bước |
| Dopamin hit | `apps/dopamine.html` | Menu hoạt động + shuffle random |
| Dopamine Menu | `apps/dopamine.html` | Cùng app dopamine (danh mục & thư mục) |
| Tài chính | `apps/finance.html` | Monarch Finance OS |
| Habit hôm nay | `apps/habits.html` | Tracker thói quen (Notion tùy chọn) |
| Experiments | App Store | Easlo Experiments |
| Học tiếng Anh | `apps/english.html` | English 28: 26 bài ngữ pháp A2-B2, 104 bài tập, ôn lỗi và tài nguyên online |
| Nhật ký | App Store | Easlo Journal |
| Mystic Oracle | `apps/mystic-oracle-final.html` | 15 hệ thống: Tarot 78 lá, Kinh Dịch, Bát Tự, chiêm tinh, Mặt Trăng, Rune và hơn nữa |

## Lưu ý

- Dữ liệu lưu trong **localStorage** trên thiết bị
- App Habits: vào **Settings → Notion** để nhập token & Database ID (không commit token lên GitHub)
- Không cần `npm install` — chỉ HTML/CSS/JS thuần

## Cấu trúc

```
├── index.html          ← Hub chính
├── apps/
│   ├── routine.html
│   ├── dopamine.html
│   ├── habits.html
│   ├── finance.html
│   ├── english.html
│   ├── mystic-oracle-final.html
│   └── oracle-v2/       ← CSS, logic và các engine được vendor
└── README.md
```
