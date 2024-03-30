import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  menuValue: boolean;
  hideMenuValue: boolean;
  hideSettings: boolean;
  hideHeader: boolean;
  changeMenuHeaderUi: boolean;
  showAnimate: boolean;
}

const initialState: CounterState = {
  menuValue: localStorage.getItem("menu") === "true" || false,
  hideMenuValue: localStorage.getItem("hideMenu") === "true" || false,
  hideSettings: localStorage.getItem("hideSetting") === "true" || false,
  hideHeader: localStorage.getItem("hideHeader") === "true" || false,
  changeMenuHeaderUi: localStorage.getItem("menuHeader") === "true" || false,
  showAnimate: false
}

export const menuSlice = createSlice({
  name: 'menuHeader',
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
    hideSetting: (state) => {
      const value = !state.hideSettings;
      localStorage.setItem("hideSetting", value.toString());
      state.hideSettings = value;
    },
    closeHeader: (state) => {
      const value = !state.hideHeader;
      localStorage.setItem("hideHeader", value.toString());
      state.hideHeader = value;
    },
    changeUiMenuHeader: (state) => {
      state.showAnimate = true;
      const value = !state.changeMenuHeaderUi;
      localStorage.setItem("menuHeader", value.toString());
      state.changeMenuHeaderUi = value;
      state.hideMenuValue = false;
      state.hideHeader = false;
      localStorage.setItem("hideHeader", false.toString());
      localStorage.setItem("hideMenu", false.toString());
    },
  },
})

export const { openMenu, closeMenu, hideMenu, hideSetting, closeHeader, changeUiMenuHeader } = menuSlice.actions

export default menuSlice.reducer