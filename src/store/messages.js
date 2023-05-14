import {createSlice} from '@reduxjs/toolkit';


const sampleData = [
    [
        { id: "1", speaks: "BOT", type: "text", data: "Hi There!, I am Wysa, an AI chatbot built by therapists." },
        { id: "2", speaks: "BOT", type: "image", data: "https://play-lh.googleusercontent.com/_2t27Nwv0sJgq3XsUCP-haxf0C17xzIEVtO4Pfrp_cSJG-VJAWzIC0DAlVF2kEx8ol2M"},
        { id: "3", speaks: "BOT", type: "text", data: "How can I help you?"},
    
    ],
    [
        { id: "1", speaks: "BOT", type: "text", data: "Good Day" },
        { id: "2", speaks: "BOT", type: "text", data: "I am Wysa, an AI chatbot built by therapists."},
        { id: "3", speaks: "BOT", type: "image", data: "https://play-lh.googleusercontent.com/_2t27Nwv0sJgq3XsUCP-haxf0C17xzIEVtO4Pfrp_cSJG-VJAWzIC0DAlVF2kEx8ol2M"},
    
    ],
    [
        { id: "1", speaks: "BOT", type: "text", data: "Hi There!" },
        { id: "2", speaks: "BOT", type: "text", data: "I am Wysa, an AI chatbot built by therapists."},
        { id: "3", speaks: "BOT", type: "image", data: "https://play-lh.googleusercontent.com/_2t27Nwv0sJgq3XsUCP-haxf0C17xzIEVtO4Pfrp_cSJG-VJAWzIC0DAlVF2kEx8ol2M"},
        { id: "4", speaks: "BOT", type: "text", data: "How can I help you?"},

    
    ],
]
const randaomData = sampleData[Math.floor(Math.random() * 3)];



let initialState  = {
    data: randaomData,
    startIndex: 0,
    delay: "1000"
}


const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setmessage(state, action) {
            state.data = action.payload;
        },

        setDelay(state, action) {
            state.delay = action.payload
        },
    }
});

const messageActions = messageSlice.actions;

export default messageSlice;
export {messageActions}
