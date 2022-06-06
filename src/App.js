import React from 'react'
import './style.css'
import Layout from "./Pages/Layout/Layout";
import Video from "./Assets/Background/Video/video-1.mp4";


function App() {


  return (
    <div className="App">
        <video src={Video} autoPlay muted loop className="video"/>
        <Layout/>
    </div>
  );
}

export default App;
