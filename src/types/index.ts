import {
  PAGE_LAYOUT,
  PAGE_THEME,
  DEFAULT_ROLE,
  GLOBAL_FUNCTION_TYPE,
} from "@/lib/constants";

export type RestfullMethod = "create" | "update" | "delete";
export type ResponseStatus = "fail" | "success";

export type SelectOptionValue = {
  value: string;
  label: string;
};

export type IPAGE_LAYOUT = (typeof PAGE_LAYOUT)[keyof typeof PAGE_LAYOUT];
export type IPAGE_THEME = (typeof PAGE_THEME)[keyof typeof PAGE_THEME];
export type IROLE = (typeof DEFAULT_ROLE)[keyof typeof DEFAULT_ROLE];

export type T_ROW_FUNCTION = {
  id: keyof typeof GLOBAL_FUNCTION_TYPE;
  isShow: boolean;
};

export interface LinkProp {
  title: string;
  icon: string;
  variant: "default" | "ghost";
  name: string;
}
