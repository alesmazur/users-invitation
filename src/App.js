import React from "react";
import "./App.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

function App() {
  const uri = "https://reqres.in/api/users";
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    isLoading;
    fetch(uri)
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((error) => {
        console.warn(error.message);
        alert("server says: " + error.message);
      })
      .finally(setIsLoading(!isLoading));
  }, []);

  const onChageSearchValue = (event) => {
    setSearchValue(event.target.value);
    console.log(event);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onSuccessClick = () => {
    setSuccess(!success);
  };

  return (
    <div className="App">
      {success ? (
        <Success onSuccessClick={onSuccessClick} count={invites.length} />
      ) : (
        <Users
          onChageSearchValue={onChageSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onSuccessClick={onSuccessClick}
        />
      )}
    </div>
  );
}

export default App;
