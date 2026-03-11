import User from './getUser/user';
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import AddUser from './addUser/AddUser';
import Update from './updateUser/update';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path:"/add",
      element: <AddUser/>,
    },
    {
      path:"/update/:id",
      element: <Update/>,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
