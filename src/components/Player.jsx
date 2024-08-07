import { useState } from "react";

export default function Player({ name, symbol }) {
    
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    const [isEditBtnClicked, setIsEditBtnClicked] = useState(false);

    return (
        <li>
            <span className="player">
                {
                    isEditBtnClicked ?
                    <input 
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)} 
                    /> :
                    <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span> 
            </span>
            <button onClick={() => {
                setIsEditing((isEditing) => !isEditing)
                setIsEditBtnClicked((isEditBtnClicked) => !isEditBtnClicked)
            }}>{ isEditing ? "Save" : "Edit" }</button>
        </li>
    );
}