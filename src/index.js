import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.scss'
import './fonts/Gobold/Gobold_Bold_Italic.otf'
import './fonts/Gobold/Gobold_Regular_Italic.otf'
import './fonts/UntitledSans/UntitledSans-Medium.otf'
import './fonts/UntitledSans/UntitledSans-Regular.otf'
import './fonts/UntitledSans/CursedTimer.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
