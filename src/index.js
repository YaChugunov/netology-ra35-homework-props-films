import React from 'react';
// import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';

import App from './App';

// ReactDOM.render(<App />, document.getElementById("root"));

const container = document.getElementById('root');
// Create a root.
const root = ReactDOMClient.createRoot(container);
// Initial render: Render an element to the root.
root.render(<App />);
