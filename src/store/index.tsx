import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface SettingStore {
  email: string;
  name: string;
  setEmail: (language: string | undefined) => void;
  setName: (theme: string | undefined) => void;
}

export const useSettingStore = create<SettingStore>()(
  devtools(
    persist(
      (set) => ({
        name: "",
        email: "",
        setEmail: (email: string | undefined) => {
          set({ email: email });
        },

        setName: (name: string | undefined) => {
          set({ name: name });
        },
      }),
      {
        name: "setting-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
