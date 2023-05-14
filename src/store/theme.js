import {createSlice} from '@reduxjs/toolkit';

let initialState  = {
    data: [
    { id: "1", isSelected: true, bubbleBackground: "#ffffff", bubbleColor: "#000000", background: "linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)" },
    { id: "2", isSelected: false, bubbleBackground: "#fce6cb", bubbleColor: "#000000", background: "linear-gradient( 111.4deg,  rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58% )" },
    { id: "3", isSelected: false, bubbleBackground: "#9995db", bubbleColor: "#000000", background: "linear-gradient( 58.2deg,  rgba(40,91,212,0.73) -3%, rgba(171,53,163,0.45) 49.3%, rgba(255,204,112,0.37) 97.7% )" },
    { id: "4", isSelected: false, bubbleBackground: "#5590f9", bubbleColor: "#000000", background: "linear-gradient( 173.1deg,  rgba(226,66,249,0.94) 10.2%, rgba(79,147,249,1) 77.3% )" },
    { id: "5", isSelected: false, bubbleBackground: "#fce6cb", bubbleColor: "#000000", background: "linear-gradient( 109.6deg,  rgba(103,30,117,1) 11.2%, rgba(252,76,2,1) 91.1% )" },
    { id: "6", isSelected: false, bubbleBackground: "#188a8d", bubbleColor: "#ffffff", background: "linear-gradient( 102.1deg,  rgba(96,221,142,1) 8.7%, rgba(24,138,141,1) 88.1% )" },
],
}



const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        settheme(state, action) {
            state.data = action.payload;
        },
    }
});

const themeActions = themeSlice.actions;

export default themeSlice;
export {themeActions}

