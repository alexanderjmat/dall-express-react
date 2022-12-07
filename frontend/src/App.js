// Importing modules
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Home from "./Home"

function App() {
	// usestate for setting a javascript
	// object for storing and using data

	return (
		<div className="App">
      <Menu/>
      <Home/>
		</div>
	);
}

export default App;

