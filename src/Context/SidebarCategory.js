import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const SidebarCategorySlice = createSlice({
    name : "sidebarCategory",
    initialState : {
        category : "17"
    },
    reducers : {
        switchCategory : (state,action)=>{
            console.log(action.payload)
           state.category = action.payload
        }
    }
})

export const { switchCategory } = SidebarCategorySlice.actions

export default SidebarCategorySlice.reducer