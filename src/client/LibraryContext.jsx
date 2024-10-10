import {createContext, useContext, useEffect, useState} from 'react';
export const GamesContext = createContext({
    games: [],
    setGames : void function (){},
});
export const useLibraryContext = ()=> useContext(GamesContext);
function LibraryContext(props) {
    const [games, setGames] = useState([]);

    useEffect(()=>{

        fetch('/game/getall-redacted', {
            method:'GET'
        }).then(response =>{
            response.json().then(data=>{
                setGames(data);
            })
        })
        console.log(games)
    },[])
    return(
        <GamesContext.Provider value={{games, setGames}}>
            {props.children}
        </GamesContext.Provider>
    );
}
export default LibraryContext;