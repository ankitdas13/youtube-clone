import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { YOUTUBE_VIDEO_SEARCH } from "../utils/constant"

export const fetchVideoResult = createAsyncThunk('/video/result',async (searchQuery)=>{
    const data = await fetch(YOUTUBE_VIDEO_SEARCH+searchQuery) 
    const json = await data.json()
    if(json.hasOwnProperty("items")){
       return json.items
    }
})

const searchVideoSlice = createSlice({
    name : 'searchVideo',
    initialState : {
        isLoading : false,
        results : []
    },
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchVideoResult.pending,(state)=>{
            state.isLoading = true
            state.results = []
        })
        .addCase(fetchVideoResult.fulfilled,(state,action)=>{
            state.results = action.payload,
            state.isLoading = false
        })
    }
})

export default searchVideoSlice.reducer