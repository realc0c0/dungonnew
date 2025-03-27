import React from 'react';
import { GameProvider } from './contexts/GameContext';
import { useGame } from './contexts/GameContext';
import CharacterCreation from './components/CharacterCreation';

function GameContent() {
  const { character, telegramUser } = useGame();

  if (!telegramUser) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-xl">Please open this app through Telegram</p>
      </div>
    );
  }

  if (!character) {
    return <CharacterCreation />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Tokenheim</h1>
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">Level {character.level}</h2>
            <p className="text-gray-400">{character.class} Class</p>
          </div>
          <div>
            <p className="text-yellow-400">{character.tokens} TON</p>
          </div>
        </div>
        {/* More game content will be added here */}
      </div>
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}

export default App;