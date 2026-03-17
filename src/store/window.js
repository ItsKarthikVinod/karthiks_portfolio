import { INITIAL_Z_INDEX } from "#constants";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { WINDOW_CONFIG } from "#constants";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
      openWindow: (windowKey, data = null) => set((state) => {
          const win = state.windows[windowKey]
          win.isOpen = true
          win.Zindex = state.nextZIndex
          win.data = data ?? win.data
          state.nextZIndex += 1;
    }),
      closeWindow: (windowKey, data = null) => set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.Zindex = INITIAL_Z_INDEX;
        win.data = null;
    }),
      focusWindow: (windowKey, data = null) => set((state) => {
        const win = state.windows[windowKey];
        win.Zindex = state.nextZIndex++;
        
    }),
  })),
);

export default useWindowStore;