import React from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

// functional component
const App = () => {
  return (
    <div>
      <Register />
      <Login />
    </div>
  );
};
export default App;

// Class component
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <div>
//         <Register />
//       </div>
//     );
//   }
// }

/* 
// functional component
const App = () => {
  return (
    <div>
      <Register />
    </div>
  );
};
export default App;
*/
