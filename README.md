# Your Universe

Bộ ứng dụng cá nhân chạy trực tiếp trên trình duyệt. Mỗi ứng dụng nằm trong một thư mục độc lập để dễ phát triển, thay thế hoặc xóa mà không ảnh hưởng các app khác.

## Chạy dự án

Không cần cài package hoặc build.

1. Mở `index.html` trực tiếp trong trình duyệt.
2. Hoặc deploy toàn bộ thư mục lên GitHub Pages.

Một số tính năng dùng API trình duyệt hoặc module JavaScript hoạt động ổn định hơn khi chạy qua local server.

## Ứng dụng

| App | Đường dẫn | Chức năng |
|---|---|---|
| Routine | `apps/routine/` | Chuỗi thói quen và timer theo từng bước |
| Timetable | `apps/timetable/` | Lịch và phân bổ thời gian trong ngày |
| Dopamine | `apps/dopamine/` | Danh mục hoạt động và lựa chọn ngẫu nhiên |
| Finance | `apps/finance/` | Theo dõi tài chính cá nhân |
| Todo | `apps/todo/` | Việc cần làm và tác vụ nhanh |
| Habits | `apps/habits/` | Theo dõi thói quen và lịch sử |
| English | `apps/english/` | Khóa ngữ pháp, bài tập và tài nguyên học |
| Journal | `apps/journal/` | Nhật ký cá nhân lưu trên thiết bị |
| Oracle | `apps/oracle/` | Trải Tarot phục vụ soi chiếu và lưu lịch sử |

## Cấu trúc

```text
.
├── index.html
├── app-guard.js
├── assets/
│   ├── favicon.svg
│   └── vendor/
│       └── tabler/
└── apps/
    ├── routine/
    ├── timetable/
    ├── dopamine/
    ├── finance/
    ├── todo/
    ├── habits/
    ├── english/
    │   └── data/
    ├── journal/
    └── oracle/
        ├── index.html
        ├── styles.css
        ├── app.js
        ├── engine.js
        ├── storage.js
        ├── data/
        │   └── cards.js
        └── assets/
            └── cards/
```

## Quy ước phát triển

- Mỗi app chỉ đọc file trong thư mục của chính nó hoặc tài nguyên dùng chung trong `assets/`.
- Điểm vào của mỗi app luôn là `apps/<app-name>/index.html`.
- Logic nghiệp vụ tách khỏi thao tác DOM khi app có nhiều trạng thái.
- Dữ liệu tĩnh đặt trong thư mục `data/`.
- Ảnh riêng của app đặt trong `apps/<app-name>/assets/`.
- Thư viện dùng chung đặt trong `assets/vendor/`.
- Dữ liệu người dùng hiện được lưu bằng `localStorage`.
- Không đặt token hoặc khóa API trực tiếp trong repository.

## Oracle mới

Oracle cũ và toàn bộ engine liên quan đã được loại bỏ. Phiên bản mới tập trung vào một trải nghiệm Tarot một lá rõ ràng:

- Ba lối vào: thông điệp hôm nay, chọn chủ đề hoặc đặt câu hỏi tự do.
- Bộ Major Arcana gồm 22 lá, hiện dùng số, tên và biểu tượng thay cho ảnh.
- Hiệu ứng xào bài, quạt bài, chọn lá và lật bài 3D.
- Trộn bài bằng Web Crypto khi trình duyệt hỗ trợ.
- Có lá xuôi/ngược và lời gợi ý chiêm nghiệm bằng tiếng Việt.
- Hoạt động trực tiếp trên trình duyệt, không cần tài khoản.

Ảnh lá bài có thể được bổ sung sau mà không cần thay đổi luồng rút bài hiện tại.

Oracle được thiết kế như công cụ phản tư, không phải nguồn dự đoán chắc chắn và không thay thế tư vấn y tế, pháp lý hoặc tài chính.
