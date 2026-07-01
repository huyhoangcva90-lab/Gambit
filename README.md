# Your Universe

Bộ ứng dụng cá nhân chạy trực tiếp trên trình duyệt. Mỗi app nằm trong một thư mục riêng để có thể phát triển, thay thế hoặc xóa mà không ảnh hưởng đến app khác.

## Chạy dự án

Không cần cài package hoặc build:

1. Mở `index.html` trực tiếp trong trình duyệt.
2. Hoặc chạy một static server tại thư mục gốc.

Để dùng đồng bộ Notion trong Habit Tracker, đặt biến môi trường
`NOTION_TOKEN` rồi chạy:

```powershell
node server.js
```

Sau đó mở `http://127.0.0.1:4173`. Token chỉ được đọc ở server và không
được gửi xuống trình duyệt.

## Cấu trúc

```text
.
|-- index.html
|-- app-guard.js
|-- assets/
|   |-- fonts/
|   |-- tarot/
|   `-- vendor/
`-- apps/
    |-- dopamine/
    |-- english/
    |-- finance/
    |-- habits/
    |-- journal/
    |-- oracle/
    |   |-- data/
    |   |-- app.js
    |   |-- index.html
    |   `-- styles.css
    |-- routine/
    |-- timetable/
    `-- todo/
```

## Quy ước

- Điểm vào của mỗi app là `apps/<app-name>/index.html`.
- Logic và giao diện riêng nằm trong thư mục của app.
- Tài nguyên dùng chung nằm trong `assets/`.
- Dữ liệu tĩnh riêng đặt trong `apps/<app-name>/data/`.
- Không đặt token hoặc khóa API trong repository.

## Oracle

Oracle là app Tarot độc lập với bộ bài 78 lá:

- Rút một lá cho thông điệp hằng ngày.
- Trải ba lá theo chủ đề hoặc câu hỏi tự do.
- Hỗ trợ lá xuôi, lá ngược và diễn giải theo ngữ cảnh.
- Ảnh bài dùng từ `assets/tarot/`.
- Dữ liệu ý nghĩa dùng từ `apps/oracle/data/source-cards.js`.

Nội dung Tarot chỉ phục vụ chiêm nghiệm cá nhân, không thay thế tư vấn y tế, pháp lý hoặc tài chính.
