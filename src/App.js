import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import { EinsteinQuoteComponent } from './EinsteinQuoteComponent';
import MouseComponent from './MouseComponent';
// import React, { Component } from 'react';
// import moment from 'moment';
// import ExampleComponent from './ExampleComponent'
// import TestComponent from './TestComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
