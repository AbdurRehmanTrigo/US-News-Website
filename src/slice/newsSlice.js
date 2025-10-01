// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// export const fetchNews = createAsyncThunk("news/fetchNews", async ( ,page=1) => {
//   const response = await axios.get(
//     // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c00d9da356294b12b6e6f62c0552a3b4 ',
//     // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c00d9da356294b12b6e6f62c0552a3b4',
//     // `https://newsapi.org/v2/everything?q=us&apiKey=c00d9da356294b12b6e6f62c0552a3b4`,
//     `https://newsapi.org/v2/everything?q=us+&apiKey=c00d9da356294b12b6e6f62c0552a3b4`,
    
    
//     // `https://newsapi.org/v2/everything?q=us+&apiKey=6d31579d26d34f61ab92c3f8470d7be1`,
//   );
//   return response.data.articles;
// });

// // export const searchFetchNews=createAsyncThunk("news/searchFetchNews",async()=>{
// // const response=await axios.get(
// // `https://newsapi.org/v2/everything?q=us&apiKey=c00d9da356294b12b6e6f62c0552a3b4,`
// // );  
// // return response.data.articles;
// // });




// export const topFetchNews=createAsyncThunk("news/topFetchNews",async()=>{
//   const response=await axios.get(
//     'https://newsapi.org/v2/top-headlines?country=us&apiKey=c00d9da356294b12b6e6f62c0552a3b4',
//     // `https://newsapi.org/v2/top-headlines?country=us&apiKey=6d31579d26d34f61ab92c3f8470d7be1`,
//   );
//   return response.data.articles;
// });
// export const healthFetchNews = createAsyncThunk(
//   "news/healthFetchNews",
//   async () => {
//     const response = await axios.get(
//       // 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=c00d9da356294b12b6e6f62c0552a3b4',
 
//       `https://newsapi.org/v2/everything?q=us+Health+&apiKey=c00d9da356294b12b6e6f62c0552a3b4`,

//       // `https://newsapi.org/v2/everything?q=us+Health+&apiKey=6d31579d26d34f61ab92c3f8470d7be1`,
//     );
//     return response.data.articles;
//   }
// );
// export const entertainmentFetchNews = createAsyncThunk(
//   "news/entertainmentFetchNews",
//   async () => {
//     const response = await axios.get(
//       `https://newsapi.org/v2/everything?q=us+Entertainment+&apiKey=c00d9da356294b12b6e6f62c0552a3b4`,
      
      
//       // `https://newsapi.org/v2/everything?q=us+Entertainment+&apiKey=6d31579d26d34f61ab92c3f8470d7be1`,

//     );
//     return response.data.articles;
//   }
// );
// export const businessFetchNews = createAsyncThunk(
//   "news/businessFetchNews",
//   async () => {
//     const response = await axios.get(
// `      https://newsapi.org/v2/everything?q=us+business+&apiKey=c00d9da356294b12b6e6f62c0552a3b4,`
     
     
//       // `https://newsapi.org/v2/everything?q=us+business+&apiKey=6d31579d26d34f61ab92c3f8470d7be1`

//     );
//     return response.data.articles;
//   }
// );
// export const technologyFetchNews = createAsyncThunk(
//   "news/technologyFetchNews",
//   async () => {
//     const response = await axios.get(
//    `   https://newsapi.org/v2/everything?q=us+Technology+&apiKey=c00d9da356294b12b6e6f62c0552a3b4,`


//       // `https://newsapi.org/v2/everything?q=us+Technology+&apiKey=6d31579d26d34f61ab92c3f8470d7be1`
//     );
//     return response.data.articles;
//   }
// );
// const initialState = {
//   articles: [],
//   healthArticles: [],
//   entertainmentArticles: [],
//   businessArticles: [],
//   technologyArticles: [],
//   topArticles:[],
//   loading: false,
//   error: null,
//   currentPage: 1,
//   articlesPerPage: 9,
//   searchQuery:"",
// };
// const newsSlice = createSlice({
//   name: "news",
//   initialState,

//   reducers: {
//     setCurrentPage: (state, action) => {
//       state.currentPage = action.payload;
//     },
//     setArticlesPerPage: (state, action) => {
//       state.articlesPerPage = action.payload;
//     },
//     setSearchQuery:(state,action)=>{
//       state.searchQuery=action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchNews.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchNews.fulfilled, (state, action) => {
//         state.articles = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchNews.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       });
//     builder
//       .addCase(healthFetchNews.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(healthFetchNews.fulfilled, (state, action) => {
//         state.healthArticles = action.payload;
//         state.loading = false;
//       })
//       .addCase(healthFetchNews.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       });
//     builder
//       .addCase(entertainmentFetchNews.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(entertainmentFetchNews.fulfilled, (state, action) => {
//         state.entertainmentArticles = action.payload;
//         state.loading = false;
//       })
//       .addCase(entertainmentFetchNews.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       });
//     builder
//       .addCase(businessFetchNews.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(businessFetchNews.fulfilled, (state, action) => {
//         state.businessArticles = action.payload;
//         state.loading = false;
//       })
//       .addCase(businessFetchNews.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       });
//     builder
//       .addCase(technologyFetchNews.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(technologyFetchNews.fulfilled, (state, action) => {
//         state.technologyArticles = action.payload;
//         state.loading = false;
//       })
//       .addCase(technologyFetchNews.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       });



//       //top Articles for FetchNews Slider bidder
//       builder
//       .addCase(topFetchNews.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(topFetchNews.fulfilled, (state, action) => {
//         state.topArticles = action.payload;
//         state.loading = false;
//       })
//       .addCase(topFetchNews.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       });
//   },
// });
// export const { setCurrentPage, setArticlesPerPage ,setSearchQuery} = newsSlice.actions;
// export default newsSlice.reducer;




































































































import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchNews = createAsyncThunk("news/fetchNews", async (_,{getState}) => {
  const{searchQuery}=getState().news;
  const response = await axios.get(
    // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c00d9da356294b12b6e6f62c0552a3b4 ',
    // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c00d9da356294b12b6e6f62c0552a3b4',
    // `https://newsapi.org/v2/everything?q=us&apiKey=c00d9da356294b12b6e6f62c0552a3b4`,
    `https://newsapi.org/v2/everything?q=us+&apiKey=c00d9da356294b12b6e6f62c0552a3b4`,
    
    
    // `https://newsapi.org/v2/everything?q=us+&apiKey=6d31579d26d34f61ab92c3f8470d7be1`,
  );
  // return response.data.articles;
  const filterArticles=response.data.articles.filter(articles=>articles.author?.toLowerCase().includes(searchQuery.toLowerCase())
);
return filterArticles;

});

// export const searchFetchNews=createAsyncThunk("news/searchFetchNews",async()=>{
// const response=await axios.get(
// `https://newsapi.org/v2/everything?q=us&apiKey=c00d9da356294b12b6e6f62c0552a3b4,`
// );  
// return response.data.articles;
// });




export const topFetchNews=createAsyncThunk("news/topFetchNews",async()=>{
  // const {searchQuery}=getState().news;
  const response=await axios.get(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=c00d9da356294b12b6e6f62c0552a3b4',
    // `https://newsapi.org/v2/top-headlines?country=us&apiKey=6d31579d26d34f61ab92c3f8470d7be1`,
  );
  return response.data.articles;
  // const filterArticles=response.data.articles.filter(articles=>articles.author?.toLowerCase().includes(searchQuery.toLowerCase())
});
export const healthFetchNews = createAsyncThunk(
  "news/healthFetchNews",
  async (_,{getState}) => {
    const{searchQuery}=getState().news;
    const response = await axios.get(
      // 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=c00d9da356294b12b6e6f62c0552a3b4',
 
      `https://newsapi.org/v2/everything?q=us+Health+&apiKey=c00d9da356294b12b6e6f62c0552a3b4`,

      // `https://newsapi.org/v2/everything?q=us+Health+&apiKey=6d31579d26d34f61ab92c3f8470d7be1`,
    );
    const filterArticles= response.data.articles.filter(articles=>articles.author?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return filterArticles;
  }
);
export const entertainmentFetchNews = createAsyncThunk(
  "news/entertainmentFetchNews",
  async (_,{getState}) => {
    const{searchQuery}=getState().news;
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=us+Entertainment+&apiKey=c00d9da356294b12b6e6f62c0552a3b4`,
      
      
      // `https://newsapi.org/v2/everything?q=us+Entertainment+&apiKey=6d31579d26d34f61ab92c3f8470d7be1`,

    );
    // return response.data.articles;
    const filterArticles= response.data.articles.filter(articles=>articles.author?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return filterArticles;
  }
);
export const businessFetchNews = createAsyncThunk(
  "news/businessFetchNews",
  async (_,{getState}) => {
    const{searchQuery}=getState().news;
    const response = await axios.get(
`      https://newsapi.org/v2/everything?q=us+business+&apiKey=c00d9da356294b12b6e6f62c0552a3b4,`
     
     
      // `https://newsapi.org/v2/everything?q=us+business+&apiKey=6d31579d26d34f61ab92c3f8470d7be1`

    );
    // return response.data.articles;
    const filterArticles= response.data.articles.filter(articles=>articles.author?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return filterArticles;
  }
);
export const technologyFetchNews = createAsyncThunk(
  "news/technologyFetchNews",
  async (_,{getState}) => {
    const{searchQuery}=getState().news;
    const response = await axios.get(
   `   https://newsapi.org/v2/everything?q=us+Technology+&apiKey=c00d9da356294b12b6e6f62c0552a3b4,`


      // `https://newsapi.org/v2/everything?q=us+Technology+&apiKey=6d31579d26d34f61ab92c3f8470d7be1`
    );
    // return response.data.articles;
    const filterArticles= response.data.articles.filter(articles=>articles.author?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return filterArticles;
  }
);
const initialState = {
  articles: [],
  healthArticles: [],
  entertainmentArticles: [],
  businessArticles: [],
  technologyArticles: [],
  topArticles:[],
  loading: false,
  error: null,
  currentPage: 1,
  articlesPerPage: 9,
  searchQuery:'',
};
const newsSlice = createSlice({
  name: "news",
  initialState,

  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setArticlesPerPage: (state, action) => {
      state.articlesPerPage = action.payload;
    },
    setSearchQuery:(state,action)=>{
      state.searchQuery=action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    builder
      .addCase(healthFetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(healthFetchNews.fulfilled, (state, action) => {
        state.healthArticles = action.payload;
        state.loading = false;
      })
      .addCase(healthFetchNews.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    builder
      .addCase(entertainmentFetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(entertainmentFetchNews.fulfilled, (state, action) => {
        state.entertainmentArticles = action.payload;
        state.loading = false;
      })
      .addCase(entertainmentFetchNews.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    builder
      .addCase(businessFetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(businessFetchNews.fulfilled, (state, action) => {
        state.businessArticles = action.payload;
        state.loading = false;
      })
      .addCase(businessFetchNews.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    builder
      .addCase(technologyFetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(technologyFetchNews.fulfilled, (state, action) => {
        state.technologyArticles = action.payload;
        state.loading = false;
      })
      .addCase(technologyFetchNews.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
      builder
      .addCase(topFetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(topFetchNews.fulfilled, (state, action) => {
        state.topArticles = action.payload;
        state.loading = false;
      })
      .addCase(topFetchNews.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
export const { setCurrentPage, setArticlesPerPage ,setSearchQuery} = newsSlice.actions;
export default newsSlice.reducer;


























