import React from "react";
import "./App.css";
import MapLeaflet from "./components/MapLeaflet";
import Header from "./components/Header";
import Button from "react-bootstrap/Button";

function App() {
    return (
        <div className="App">
            <Header />
            <div style={{ paddingTop: "80px" }}>
                <Button variant="primary">Primary</Button>
                <MapLeaflet />
            </div>
        </div>
    );
}

export default App;
