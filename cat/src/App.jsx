import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Loader from './loader';

function App() {
  const [img, setImg] = useState("#");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [authenticated, setAuthenticated] = useState(false); // Add authentication state

  const key = "Mishika1512**";

  function call() {
    setLoading(true); // Set loading to true before fetching
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "live_7TsBWRZazOjvubnk4WPdFduIEZksFDeFswXaVhfOpcwkoSKgr72X3F3G6UQEf55m"
    });

    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

    fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
      .then(response => response.json())
      .then((result) => { setImg(result[0].url); console.log(result[0].url); setLoading(false); }) // Set loading to false after fetching
      .catch(error => { console.log('error', error); setLoading(false); }); // Set loading to false on error
  }

  useEffect(() => { console.log(img) }, [img]);

  const handleLogin = () => {
    if (pass === key) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      alert("wrong password")
    }
  };

  return (
    <>
      {!authenticated ? (
        <>
          <input
          placeholder="Enter password"
          style={{ height: '4vh', width: '20vw' }}
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick = {handleLogin}> submit</button>
        </>

      ) : (
        <>
          <button onClick={call}>Get new cat</button>
          <br />
          <br />
          {loading ? (
            <Loader />
          ) : (
            <img
              style={{ height: "50vh", width: "50vh", margin: "auto" }}
              src={img}
              alt="Cat"
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
