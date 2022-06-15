import { Todo } from "@/pages/Home/types";

const Storage = {
  set(key: string, obj: Record<string, any>[]) {
    localStorage.setItem(key, JSON.stringify(obj));
  },
  get(key: string) {
    try {
      const data = localStorage.getItem(key);
      return JSON.parse(data || "");
    } catch (error) {}
  },
};

export default Storage;
