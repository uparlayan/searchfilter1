import { useState } from 'react';
import './app.css';
import Table from "./Table";
import { Users } from './users';

function App() {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(query) ||
        item.last_name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data = {search(Users)} />
    </div>
  );
}

export default App;
