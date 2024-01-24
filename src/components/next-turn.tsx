interface TurnProps{
    onClickFn : (e:React.MouseEvent<HTMLButtonElement>) =>void;
    cardIndex: number;
}

export const NextTurn:React.FC<TurnProps> =({onClickFn, cardIndex})=>{
    const cardText = cardIndex === 0? "Show Scores": "Next Turn";
    return (
        <button className = "button button__game button__game--play" id="submit" onClick={onClickFn} >
            {cardText}
        </button>
    )

}