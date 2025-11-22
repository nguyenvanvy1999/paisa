## Quy trình thêm/chỉnh sửa bản dịch

1. Sửa `src/lib/i18n/en/index.ts` (base locale).
2. Chạy `npm run typesafe-i18n` để cập nhật `i18n-types.ts` và helper autogen.
3. Đồng bộ bản dịch khác (`src/lib/i18n/vi/index.ts`) dựa trên key mới.
4. Commit đồng thời cả file locale và file autogen liên quan.

## Quy ước

- Key dạng `domain.section.element` (ví dụ: `nav.sections.assets.balance`).
- Ưu tiên câu hoàn chỉnh, hạn chế ghép chuỗi.
- Placeholder dùng `{name}` để Typesafe-i18n convert thành tham số hàm.
- Formatter custom nằm ở `src/lib/i18n/formatters.ts` (sử dụng chung cho mọi locale).

## Cơ chế detect locale

Thứ tự ưu tiên: `?lang=` trong URL → `localStorage("paisa.locale")` → `navigator.languages` → `en`.

Module `src/lib/i18n/locale.ts` chịu trách nhiệm:

- Đảm bảo đã load locale tương ứng (lazy load đối với locale ≠ `en`).
- Đồng bộ `document.documentElement.lang`.
- Cung cấp API `changeLocale()` cho UI (ví dụ `LanguageSwitcher`).

## Chống regressions

- Test thuần `bun:test` tại `src/lib/i18n/detector.test.ts` đảm bảo logic chuẩn hóa/ưu tiên locale.
- Khi thêm locale mới:
  - Cập nhật `.typesafe-i18n.json` (`baseLocale` nếu thay đổi).
  - Thêm folder `src/lib/i18n/<locale>/index.ts`.
  - Cập nhật `docs/i18n/architecture.md` nếu có thay đổi workflow.
