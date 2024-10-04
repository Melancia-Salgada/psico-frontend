// src/components/AppContent.js
import React from 'react';
import {
  paciente
} from '../components/Cards/Novo';

const CardNovoFunction = ({ title, onClose, defaultPosition, onStop }) => {

  const renderContent = () => {
    switch (title) {
      case 'A':
        return <paciente></paciente>
      default:
        return null;
    }
  };

  return (
    <div>
        {renderContent()}
    </div>
      
  );
};

export default CardNovoFunction;
