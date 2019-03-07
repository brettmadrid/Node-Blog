import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Cards from './Cards';
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:9090/api/users")
      .then(response => setUsers( response.data ))
      .catch(err => console.log(err));
  });

    return (
      <div className="App">
        <Paper className="paper" elevation={1}>
          <Typography variant="h5" component="h3">
            This is a strip of paper telling you...
          </Typography>
          <Typography component="p">
            that a bunch of Tolkien characters follow...
          </Typography>
        </Paper>
        <div className="cards-container">
          <Cards users={users}/>
        </div>
      </div>
    );
}

export default App;
