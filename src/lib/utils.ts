import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CalendarDateTime } from "@internationalized/date";
import type { RestfullMethod, ResponseStatus } from "@/types";
import { toast } from "vue-sonner";
import i18n from "@/i18n";
import type { Updater } from "@tanstack/vue-table";
import type { Ref } from "vue";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentDateTime() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return new CalendarDateTime(year, month, day, hours, minutes, seconds);
}

export function sendMessageToast(
  status: ResponseStatus,
  method: RestfullMethod,
  toastType: "success" | "error" | "default",
  message?: string
) {
  if (!(status || method || toastType)) return;

  if (toastType === "success")
    return toast.success(
      i18n.global.t(`common.success`, {
        action: i18n.global.t(`common.${method}`),
      })
    );
  else if (toastType === "error")
    return toast.error(
      i18n.global.t("common.fail", {
        action: i18n.global.t(`common.${method}`),
        mess: message,
      })
    );
  else
    toast(
      i18n.global.t(`common.${status}`, {
        action: i18n.global.t(`common.${method}`),
      })
    );
}

export function setLocalStorage(key: string, data: any) {
  if (!key) return;
  sessionStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorage(key: string) {
  if (!key) return;
  return JSON.parse(JSON.stringify(sessionStorage.getItem(key)));
}

export function removeStorage(keysToKeep: string[]): void {
  const savedItems: { [key: string]: string } = {};

  keysToKeep.forEach((key) => {
    const value = sessionStorage.getItem(key);
    if (value !== null) {
      savedItems[key] = value;
    }
  });

  sessionStorage.clear();
  Object.keys(savedItems).forEach((key) => {
    sessionStorage.setItem(key, savedItems[key]);
  });
}

export function truncateText(text: string, maxLength: number) {
  const newText = text.slice(0, maxLength);
  return text.length > maxLength ? `${newText}...` : newText;
}

export function formatPrice(price: number | string) {
  if (price == "undefined" || price === "") return;
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    notation: "standard",
  }).format(Number(price));
}

export function valueUpdater<T extends Updater<any>>(
  updaterOrValue: T,
  ref: Ref
) {
  ref.value =
    typeof updaterOrValue === "function"
      ? updaterOrValue(ref.value)
      : updaterOrValue;
}

export function formatDateTime(date: string | Date | number) {
  if (!date) return;
  return format(date, "dd-MM-yyyy HH:mm:ss");
}
