import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { YOUTUBE_SEARCH } from "../utils/constant"

export const fetchVideoSuggestion = createAsyncThunk('/suggest/video', async (searchQuery)=>{
    const data = await fetch(YOUTUBE_SEARCH + searchQuery)
    const json = await data.json()
    console.log(json)
    return json[1]
})


const searchAuthCompletionSlice = createSlice({
    name : 'setautoComplete',
    initialState : {
      isLoading : false,
      results : []
    },
    reducers : {},
    extraReducers : (builder) => {
      builder.addCase(fetchVideoSuggestion.fulfilled,(state,action)=>{
        state.results = action.payload
        state.isLoading = false
      })
    }
})

export default searchAuthCompletionSlice.reducer