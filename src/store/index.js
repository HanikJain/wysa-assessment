import { configureStore} from '@reduxjs/toolkit';
import themeSlice from './theme';
import messageSlice from './messages';


const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        message: messageSlice.reducer
    }
})

export default store;
