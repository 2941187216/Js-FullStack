import React from 'react';
import logo from './logo.svg';
import { Drag1 } from './useDrag'
import './App.css';
import DragAble1, { WithDragAble2 } from './DragAble1'
function App() {
  return (
    <div>
      <DragAble1 />
      <WithDragAble2 />
      <Drag1 />
    </div>
    
  );
}

export default App;
