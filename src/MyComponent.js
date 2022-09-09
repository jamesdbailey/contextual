import React, {useContext} from 'react';
import {AppContext} from './App';

const MyComponent = () => {
	const {globals, locals, fns} = useContext(AppContext);
	const click = (e) => {
		console.log(globals);
		console.log(locals);
		console.log(fns.cbFn());
		fns.cbFn = (() => {
			const message = `Now coming to you from MyComponent with ${globals.var1} and ${locals.localVar}`;
			return message;
		});
		console.log(fns.cbFn());
	}

	return(
		<button onClick={click}>What?</button>
	)
}

export default MyComponent;
