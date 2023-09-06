import React, { useEffect, useState } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Scroll from "../Components/Scroll.js";
import ErrorBoundary from "../Components/ErrorBoundary.js";

function App() {
  // Create a state for the user list

  const [userList, setUserList] = useState({
    displayedRobots: [],
    searchfield: "",
    loading: true,
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        setUserList({ displayedRobots: users, searchfield: "", loading: false })
      );
  }, []);

  // Create the on Search Event
  const onSearchChange = (event) => {
    setUserList({ ...userList, searchfield: event.target.value.toLowerCase() });
  };
  // Create the filtered robots
  const filteredRobots = userList.displayedRobots.filter((robot) =>
    robot.name?.toLowerCase().includes(userList.searchfield?.toLowerCase())
  );
  return !userList.displayedRobots.length ? (
    <h1>loading</h1>
  ) : (
    <div className=" tc">
      <h1 className=" f1">robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList users={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
