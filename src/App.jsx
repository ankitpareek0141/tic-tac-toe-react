import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';

function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name={'Player 1'} symbol={'X'} />
                    <Player name={'Player 2'} symbol={'O'} />
                </ol>
                Game Board
                <GameBoard /> 
            </div>
            LOG
            <Log />
        </main>
    );
}

export default App;
