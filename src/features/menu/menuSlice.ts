import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  menuValue: boolean;
  hideMenuValue: boolean;
}

const initialState: CounterState = {
  menuValue: localStorage.getItem("menu") === "true" || false,
  hideMenuValue: localStorage.getItem("hideMenu") === "true" || false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state) => {
      localStorage.setItem("menu", true.toString());
      localStorage.setItem("hideMenu", false.toString());
      state.menuValue = true;
      state.hideMenuValue = false;
    },
    closeMenu: (state) => {
      localStorage.setItem("menu", false.toString());
      state.menuValue = false;
      state.hideMenuValue = false;
    },
    hideMenu: (state) => {
      localStorage.setItem("hideMenu", true.toString());
      state.hideMenuValue = true;
      state.menuValue = false;
    },
  },
})

export const { openMenu, closeMenu, hideMenu } = menuSlice.actions

export default menuSlice.reducer