import { useSelector, useDispatch } from 'react-redux';
import {messageActions} from "../store/messages";


export default function useMessage() {
    const data = useSelector((state) => state.message.data);
    const clonedData = structuredClone(data);
    const dispatch = useDispatch();

    function update(text){
        const id = clonedData.length + 1
        const obj = {
            id,
            speaks: "ME",
            data: text,
            type: "text",
        }
        
        clonedData.push(obj);
        dispatch(messageActions.setmessage(clonedData));
        
    }

  return {update}
}
