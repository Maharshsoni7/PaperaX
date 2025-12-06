import { create } from "zustand";

interface AppState {
    accessToken: string | null;
    refreshToken: string | null;

    setTokens: (access: string, refresh: string) => void;
    clearTokens: () => void;
}

export const useAppStore = create<AppState>((set) => ({
    accessToken: null,
    refreshToken: null,

    setTokens: (access, refresh) =>
        set(() => ({ accessToken: access, refreshToken: refresh })),

    clearTokens: () =>
        set(() => ({ accessToken: null, refreshToken: null })),
}));
