import React from "react";
import Header from "./components/Header";
import MapboxGLMap from "./components/MapboxGLMap";
import Theme from "./components/Theme";

const styles = {
  overflow:'hidden'
}

function App() {
  return (
    <div style={styles}>
      <Header/>
      <Theme />
    </div>
  );
}

export default App;
