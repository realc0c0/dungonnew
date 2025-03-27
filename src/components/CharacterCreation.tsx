import React from 'react';
import { Shield, Sword, Wand } from 'lucide-react';
import { useGame } from '../contexts/GameContext';

const CharacterCreation: React.FC = () => {
  const { createCharacter } = useGame();

  const characterClasses = [
    {
      type: 'warrior',
      name: 'Warrior',
      icon: Shield,
      description: 'Masters of close combat with high defense',
    },
    {
      type: 'mage',
      name: 'Mage',
      icon: Wand,
      description: 'Wielders of powerful spells and elemental magic',
    },
    {
      type: 'rogue',
      name: 'Rogue',
      icon: Sword,
      description: 'Swift and deadly, masters of stealth',
    },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Choose Your Class</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {characterClasses.map(({ type, name, icon: Icon, description }) => (
          <button
            key={type}
            onClick={() => createCharacter(type)}
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex flex-col items-center text-center"
          >
            <Icon className="w-16 h-16 mb-4" />
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-gray-400">{description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterCreation