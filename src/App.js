import './App.css';
import React from 'react';
import MyComponent from './MyComponent';

const AppContext = React.createContext();

function App() {
	const globals = {
		var1: "test"
	};
	const locals = {
		localVar: "nothing"
	}
	const fns = {
		cbFn: (() => "empty")
	}

	return (
		<div className="App">
			<AppContext.Provider value={{globals, locals, fns}}>
				<MyComponent />
			</AppContext.Provider>
		</div>
	);
}

export default App;
export {AppContext}
