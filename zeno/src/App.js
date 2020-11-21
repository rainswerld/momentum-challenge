import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Unsplash for use in the App
import Unsplash, { toJson } from 'unsplash-js'
// unsplash uses 'fetch' so you must also import it from node-fetch
import fetch from 'node-fetch'
// set the global.fetch to the fetch imported from node
global.fetch = fetch
// give unsplash your access key
const unsplash = new Unsplash({ accessKey: 'vRrjM47nn30k5-Et_4_ntkapy8oxBLWpbGGkiS7EzNw' });

function App() {
  // use the useState method to instantiate the image variable and the setImage method
  const [image, setImage] = useState([])
  // use the useEffect method to make an API call to unsplash
  useEffect(() => {
    // get a rando, photo using unsplash's built in command with the given username
    unsplash.photos.getRandomPhoto({ username: 'naoufal' })
      // convert the response to json with unsplash's built in toJson method
      .then(toJson)
      // use the setImage method to set the image with the url response from unsplash
      .then(res =>
        // console.log(res.urls.full)
        setImage(res.urls.raw)
      )
  }, [])

  return (
    <div className="App full">
      <ul id="background" className="background">
        <li className="background-item" style={{ backgroundImage: `url(${image})` }}>
        </li>
      </ul>
    </div>
  );
}

export default App;
