import React from "react";
import "./App.css";
import MapLeaflet from "./components/MapLeaflet";
import Button from "react-bootstrap/Button";

function App() {
    return (
        <div className="App">
            <h1>Welcome</h1>
            <Button variant="primary">Primary</Button>
            <MapLeaflet />
        </div>
    );
}

export default App;
