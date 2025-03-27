import React, { createContext, useContext, useState, useEffect } from 'react';
import { Shield, Sword, Wand } from 'lucide-react';

type CharacterClass = 'warrior' | 'mage' | 'rogue';

interface Character {
  class: CharacterClass;
  level: number;
  experience: number;
  tokens: number;
}

interface GameContextType {
  character: Character | null;
  createCharacter: (characterClass: CharacterClass) => void;
  telegramUser: any;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [telegramUser, setTelegramUser] = useState<any>(null);

  useEffect(() => {
    // Initialize Telegram WebApp
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      
      // Set theme color based on Telegram theme
      const colorScheme = window.Telegram.WebApp.colorScheme;
      document.documentElement.setAttribute('data-theme', colorScheme);
      
      // Get user data
      setTelegramUser(window.Telegram.WebApp.initDataUnsafe.user);
    }
  }, []);

  const createCharacter = (characterClass: CharacterClass) => {
    setCharacter({
      class: characterClass,
      level: 1,
      experience: 0,
      tokens: 0
    });
  };

  return (
    <GameContext.Provider value={{ character, createCharacter, telegramUser }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};