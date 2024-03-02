import { useContext } from "react";
import { AppState } from "../App";

function Home() {
  const { user } = useContext(AppState);
  return (
    <div>
      <h1>Home</h1>
      <br />
      <br />
      <br />
      <h2>Wellcome : {user.username} </h2>
    </div>
  );
}

export default Home;
