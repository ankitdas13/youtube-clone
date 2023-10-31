import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { MAX_RESULT, YOUTUBE_API } from "../utils/constant"

export const fetchVideoCategory = createAsyncThunk("/video/category", async(params)=>{
    const query = new URLSearchParams(params)
    const controller = new AbortController()
    const {signal} = controller     
    
    console.log("fetchVideoCategory api...",params)
    const data = await fetch(YOUTUBE_API+MAX_RESULT+"&"+query,{signal})
    const json = await data.json()

    return {json, "category" : query.get("videoCategoryId")}
})



export const searchVideoCategorySlice = createSlice({
    name : "searchVideoCategory",
    initialState : {
      isLoading: false,  
      categoryList : [
        {
            name: 'default',
            category: '17',
            isSet: true
        },
        {
            name: 'music',
            category: '10',
            isSet: false
        },
        {
            name: 'gaming',
            category: '20',
            isSet: false
        },
        {
            name: 'entertainment',
            category: '24',
            isSet: false
        },
        {
            name: 'new',
            category: '25',
            isSet: false
        },
        {
            name: 'gadgets',
            category: '28',
            isSet: false
        },
      ],
      results: []
    },
    reducers: {},
    extraReducers: (builder)=>{
      builder.addCase(fetchVideoCategory.pending,(state)=>{
         state.isLoading = true
      })
      .addCase(fetchVideoCategory.fulfilled, (state,action)=>{
         state.isLoading = false
         state.categoryList.map((param)=>{
            if(param.name === "default"){
                param.isSet = false
            }
            
            if(param.category === action?.payload?.category){
                param.isSet = true
            }
            console.log("Set",action?.payload?.category)
         })

         state.results = action?.payload?.json
      })
    }
})

export default searchVideoCategorySlice.reducer
