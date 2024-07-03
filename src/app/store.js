import { configureStore } from '@reduxjs/toolkit';
import SideBarToggle from '../features/sidebar/Sidebar.js';
import searchSlice from '../features/suggestions/searchSlice.js';
export const store = configureStore({
  reducer: {
    toggleSideBar:SideBarToggle,
    search:searchSlice,
  },
});