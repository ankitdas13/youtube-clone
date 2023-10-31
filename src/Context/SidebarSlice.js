import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name : 'sidebar',
    initialState : {
        isMenuOpen : true
    },
    reducers : {
        toggleMenu : (state)=>{
          state.isMenuOpen = !state.isMenuOpen
        },
        watchMode :(state,action)=>{
            state.isMenuOpen = action.payload
        },
    }
})

export const { toggleMenu, watchMode } = sidebarSlice.actions

export default sidebarSlice.reducer