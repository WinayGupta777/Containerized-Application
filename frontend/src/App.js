import "./App.css";
import React from 'react';
import axios from 'axios';
import env from 'react-dotenv';

const App = () => {
  const [ip, setIp] = React.useState(null);
  const [msg, setMsg] = React.useState('');

  const PORT = env?.BE_PORT || 5000;
  const HOST = env?.BE_HOST || "localhost";

  console.log("PORT: ", PORT);
  console.log("HOST: ", HOST);
  console.log("env: ", env.BE_HOST, env.BE_PORT);

  React.useEffect(() => {
    axios.get(`http://${HOST}:${PORT}`)
      .then(res => {
        setIp(res.data.ip);
      })
      .catch(err => {
        setMsg("Error: " + err.message);
      })
      // eslint-disable-next-line
  }, []);

  return (
    <div style={{
      textAlign: "center",
    }}>
      <div style={{
        height: "10vh",
        fontSize: "3rem",
      }}>Your IP Address</div>
      <div style={{
        fontSize: "4rem",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
      }} >
        {ip ? ip : msg}
      </div>
    </div>
  )
}

export default App;