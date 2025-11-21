## Tổng quan audit văn bản hardcode

- `src/app.html`: meta description, tiêu đề trang HTML, favicon title đang cố định tiếng Anh.
- `src/routes/+error.svelte`: toàn bộ nội dung lỗi 404 / generic error (Heading “Page not found”, “Something Went Wrong”, hướng dẫn báo lỗi) viết tay trong template.
- `src/routes/login/+page.svelte`: nhãn form “Username”, “Password”, nút “Login”, cũng như thông báo lỗi trả về backend chưa qua i18n.
- `src/lib/components/Navbar.svelte`: gần 40 label menu (Dashboard, Cash Flow, Income Statement, ...), breadcrumb, tooltip “readonly”, Recurring icon labels (“Cleared”, “Past due”...) đang hardcode tiếng Anh.
- `src/lib/components/ZeroState.svelte`, `src/lib/components/Actions.svelte`, `src/lib/components/ThemeSwitcher.svelte`: nhiều thông điệp hướng dẫn/tooltip nhập cứng.
- `src/routes/(app)/**`: các trang chi tiết (cash_flow, assets, liabilities, more/about, ... ) có heading, mô tả, cột bảng viết trực tiếp trong component.

### Ưu tiên chuyển đổi giai đoạn 1

1. Khung ứng dụng chung: app shell, navbar, breadcrumb, thông báo lỗi.
2. Luồng đăng nhập + thông báo invalid credential.
3. Các component tái sử dụng (zero-state, modals) để tránh trùng lặp text.

Các khu vực chuyên sâu (báo cáo, bảng phân tích) sẽ được gom theo module riêng sau khi hoàn thiện nền tảng dịch.*** End Patch

