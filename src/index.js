import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from '@nextui-org/react';


const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#181920',
      text: '#fff',
      // you can also create your own color
      myDarkColor: '#ff4ecd'
      // ...  more colors
    },
    space: {},
    fonts: {}
  }
});
const yellowTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#1a2131',
      text: '#fff',
      // you can also create your own color
      myDarkColor: '#ff4ecd'
      // ...  more colors
    },
    space: {},
    fonts: {}
  }
});



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <NextUIProvider theme={darkTheme}>
    <App />
  </NextUIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
