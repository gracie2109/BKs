import { getLocalStorage, getCurrentDateTime, valueUpdater } from "@/lib/utils";
import type { LinkProp } from "@/types";
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table";

export const USER_LOCALE = JSON.parse(getLocalStorage("user-locale"));
export const CURRENT_DATE = getCurrentDateTime();

export const COLLECTION = {
  PRODUCTS: "products",
  USERS: "users",
  PROVIDERS: "service-provider",
  PETS: "pets",
  PETS_SERVICES: "pet-services",
  PET_SERVICES_PRICE: 'pet-service-price'
};

export const DEFINE_PRODUCT_CATEGORIES = [
  {
    value: "food_n_beverage",
    vi_name: "Đồ ăn & Đồ uống",
    en_name: "Food & beverage",
  },
  {
    value: "other",
    vi_name: "Vật tư",
    en_name: "Other",
  },
];

export const PAGE_LAYOUT = {
  ADMIN: "admin",
  CLIENT: "client",
  NO_LAYOUT: "empty",
  AUTH: "auth",
} as const;

export const PAGE_THEME = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
} as const;

export const DEFAULT_ROLE = {
  CUSTOMER: "customer",
  ADMIN: "admin",
  SUPER_ADMIN: "superAdmin",
  CASHIER: "cashier",
} as const;

export const LOCAL_STORAGE_KEY = {
  LAYOUT: "layout",
  THEME: "theme",
  VISIBLE_COLUMN: "visibleColumn",
};

export const HEADER_ADVANCE_FUNCTION = {
  FILTER: "filter",
  RESET: "reset",
  EXPORT: "export",
  IMPORT: "import",
  ADD_NEW: "addNew",
  SETTING_COLUMN: "settingColumn",
} as const;

export const PROVIDER_KEYS = {
  IS_COLLAPSE: "isCollapsed",
};

export const GLOBAL_FUNCTION_TYPE = {
  DELETE: "Delete",
  EDIT: "Edit",
};

export const INITIAL_PAGE_INDEX = 1;
export const INITIAL_PAGE_SIZE = 5;

export const PAGE_SIZES = [5, 25, 50,100,200,500];

export const DEFINE_PET_ICONS: { [key: string]: string } = {
  bird: "lucide:bird",
  bone: "lucide:bone",
  bug: "lucide:bug",
  bugOff: "lucide:bug-off",
  cat: "lucide:cat",
  dog: "lucide:dog",
  bugPlay: "lucide:bug-play",
  egg: "lucide:egg",
  fish: "lucide:fish",
  fishOff: "lucide:fish-off",
  fishSymbol: "lucide:fish-symbol",
  origami: "lucide:origami",
  pawPrint: "lucide:paw-print",
  rabbit: "lucide:rabbit",
  rat: "lucide:rat",
  shell: "lucide:shell",
  squirrel: "lucide:squirrel",
  turtle: "lucide:turtle",
  worm: "lucide:worm",
};

