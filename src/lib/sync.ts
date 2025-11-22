import * as toast from "bulma-toast";
import { ajax } from "./utils";
import { i18nObject } from "./i18n/i18n-util";
import { getActiveLocale } from "./i18n/locale";

export async function sync(request: Record<string, any>) {
  const { success, message } = await ajax("/api/sync", {
    method: "POST",
    body: JSON.stringify(request)
  });

  if (!success) {
    const LL = i18nObject(getActiveLocale());
    toast.toast({
      message: `<b>${LL.sync.failedToSync()}</b>\n${message}`,
      type: "is-danger",
      duration: 10000
    });
  }
}
