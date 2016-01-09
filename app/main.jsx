import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.jsx';

import '../scss/main.scss';

main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}