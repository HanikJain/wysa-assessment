import { useSelector, useDispatch } from 'react-redux';
import {useAuth} from "../store/AuthContext";
import {themeActions} from "../store/theme";


export default function useSelectTheme() {
    const data = useSelector((state) => state.theme.data);
    const {currentUser} = useAuth();
    const clonedData = structuredClone(data);
    const dispatch = useDispatch();

    async function update(id){
        for (let item of clonedData){
            if(item.id === id){
                item.isSelected = true;
            } else {
                item.isSelected = false;
            }
        }

        
        const  url = process.env.REACT_APP_SERVER_URL + "/api/updatethemes";

        const response = await fetch(url,{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: currentUser.email,
                themes: clonedData
            })
          });


        if(!response.ok){
            throw new Error("Error updating theme");
        }

        const results = await response.json();
        dispatch(themeActions.settheme(results.themes));
        
    }

  return {update}
}
