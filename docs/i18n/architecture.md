## Lựa chọn thư viện

- Đánh giá `typesafe-i18n` vs `svelte-i18n`:
  - `typesafe-i18n`: sinh type tự động, hỗ trợ namespace sâu, formatter built-in, adapter cho Svelte/SvelteKit, lazy load locale.
  - `svelte-i18n`: đơn giản hơn nhưng thiếu typing mạnh, cần định nghĩa thủ công schema.
- Quyết định: sử dụng `typesafe-i18n` vì đáp ứng yêu cầu mở rộng và type-safe, dễ tích hợp SvelteKit, hỗ trợ async loader cho SSR/CSR.

## Kiến trúc tổng quan

```
src/
 └─ lib/
     └─ i18n/
         ├─ en/index.ts        # base locale (nguồn sinh type)
         ├─ vi/index.ts        # bản dịch tiếng Việt
         ├─ formatters.ts      # formatter chung (currency, date)
         ├─ detectors.ts       # detect locale từ URL/query/storage
         ├─ i18n-types.ts      # file autogen (đừng chỉnh tay)
         ├─ i18n-util.ts       # helper load async/sync
         └─ i18n-svelte.ts     # store LL/locale dùng trong component
```

- `baseLocale`: `en`. Mọi key mới phải thêm ở `en/index.ts` → chạy `npm run typesafe-i18n`.
- Locale khác (`vi`) import `Translation` để đảm bảo map đủ key.
- Sử dụng `loadLocaleAsync` trong `src/hooks.client.ts` & `hooks.server.ts` để attach locale khi SSR.

## Chiến lược tải và lưu locale

- Ưu tiên thứ tự: `?lang=` → localStorage (`paisa.locale`) → header Accept-Language → fallback `en`.
- Store `locale` của `typesafe-i18n` đồng bộ với `svelte-local-storage-store` để nhớ lựa chọn người dùng.
- Lazy load: mỗi locale bundle riêng để giảm JS initial.

## Quy ước đặt key

- Format `domain.section.element`. Ví dụ: `auth.login.title`, `nav.assets.balance`.
- Dùng câu hoàn chỉnh thay vì chuỗi ghép.
- Placeholder dùng cú pháp `{value}` để `typesafe-i18n` tự sinh hàm.

## Quy trình làm việc

1. Sửa `src/lib/i18n/en/index.ts`.
2. Chạy `npm run typesafe-i18n`.
3. Sao chép key sang locale khác (`vi`), update bản dịch.
4. Nếu dùng formatter mới → khai báo ở `formatters.ts`, re-export trong `i18n-util`.
5. Commit gồm thay đổi base locale + file autogen tương ứng.

