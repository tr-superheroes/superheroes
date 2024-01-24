import { useState, useEffect, createContext } from "react"
import { TrumpCard} from "../types/game.types";
import { GameContainer } from "./game-container";
import ShowLoading from "./show-loading";
import {getCards} from './../../functions/superhero_card_functions';
import { DEFAULT_NUMBER_OF_CARDS } from "../../helpers/constants";

export const GameContext = createContext<TrumpCard[] | undefined>([]);
export const StartGame:React.FC =() =>{
    const [isNewGame,setIsNewGame] = useState(true);
    const [response,setResponse] = useState<TrumpCard[] | undefined>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);

    const fetchCards = async() =>{
        try{
            setIsLoading(true);
            const data = await getCards(DEFAULT_NUMBER_OF_CARDS);
            //console.log(data);
            const cards = data as unknown as TrumpCard[];
            if (cards.length > 0) {
                setResponse(cards);
            }
            setIsLoading(false);
        }catch(error){
            console.log(error);
            setError(true);
        }
    }
    useEffect(() => {
        fetchCards();
        },[]); 

    const handleClick = () =>{
        setIsNewGame(false); //hides the button and loads the game container
    }

    return (
        <GameContext.Provider value={response}>
        {isNewGame &&
        <>
            <div className = "shield">
            {
            <div className = "shield__text">
                <p className ="shield__text--main" >Superhero</p>
                <p className ="shield__text--info">Top</p>
                <p className ="shield__text--info">Trumps</p>
            </div>
            }
            </div>
        </>}
        {isError && (<p className="loading-error">Error loading the game</p>)}
        {!isError && isLoading &&  
        <ShowLoading/>
        }
        {!isError && !isLoading && isNewGame &&
        <>
            <div className = "start">
                <button className = "button button__game button__game--start" onClick={handleClick} >Start Game</button>
            </div>
        </>
        }   
            
            {!isNewGame && 
            <>
            <GameContainer/>
            </>
            }
        </GameContext.Provider>
    )
}