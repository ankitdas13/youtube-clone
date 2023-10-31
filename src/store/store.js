import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "../Context/SidebarSlice";
import searchAuthCompletionSlice from "../Context/searchAuthCompletionSlice";
import searchVideoResult from "../Context/searchVideoResult";
import SidebarCategory from "../Context/SidebarCategory";
import searchVideoCategory from "../Context/searchVideoCategory";

const store = configureStore({
    reducer : {
       'sidebar' : SidebarSlice,
       'searchautoComplete' : searchAuthCompletionSlice,
       'searchVideoResult' : searchVideoResult,
       'searchVideoCategory' : searchVideoCategory,
       'sidebarCategory' : SidebarCategory,
    }
})

export default store