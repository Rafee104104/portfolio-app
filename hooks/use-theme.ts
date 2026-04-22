"use client";

import { useSyncExternalStore } from "react";
import type { Theme } from "@/lib/portfolio-data";

const themeStorageKey = "portfolio-theme";
const themeChangeEvent = "portfolio-theme-change";

const getThemeSnapshot = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(themeStorageKey);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getServerThemeSnapshot = (): Theme => "light";

const subscribeToTheme = (onStoreChange: () => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleStorage = (event: StorageEvent) => {
    if (event.key === themeStorageKey) {
      onStoreChange();
    }
  };
  const handleMediaChange = () => {
    if (!window.localStorage.getItem(themeStorageKey)) {
      onStoreChange();
    }
  };

  window.addEventListener(themeChangeEvent, onStoreChange);
  window.addEventListener("storage", handleStorage);
  mediaQuery.addEventListener("change", handleMediaChange);

  return () => {
    window.removeEventListener(themeChangeEvent, onStoreChange);
    window.removeEventListener("storage", handleStorage);
    mediaQuery.removeEventListener("change", handleMediaChange);
  };
};

export const setStoredTheme = (theme: Theme) => {
  window.localStorage.setItem(themeStorageKey, theme);
  window.dispatchEvent(new Event(themeChangeEvent));
};

export const useTheme = () => useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
