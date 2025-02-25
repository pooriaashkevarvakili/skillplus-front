//component allStore
import { configureStore } from "@reduxjs/toolkit";

import { maharatNarm } from "./maharatNarm";

const store = configureStore({
  reducer: {
    
    [maharatNarm.reducerPath]: maharatNarm.reducer,
    
    
    // Add any other reducers here
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(maharatNarm.middleware)
      
  
});

export default store;