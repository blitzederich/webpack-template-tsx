import React from 'react';
import ReactDOM from 'react-dom';

interface HelloWorldInterface {
    name?: string
}

function HelloWorld(props: HelloWorldInterface): JSX.Element {
	return <h1>Hello, {props.name ? props.name : 'World'}!</h1>;
}

ReactDOM.render(
	<HelloWorld name="Alexander"/>,
	document.getElementById('root')
);