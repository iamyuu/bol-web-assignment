import * as React from 'react';

export default function App() {
	const [counter, setCounter] = React.useState(0);

	return (
		<button onClick={() => setCounter(prev => prev + 1)} className='p-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition'>
			Clicked {counter}
		</button>
	);
}
