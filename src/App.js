import "./App.css";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostsList from "./components/PostsList";
import PostsCreate from "./components/PostsCreate";
import PostsEdit from "./components/PostsEdit";
import UsersList from "./components/Users/UsersList";
import UsersCreate from "./components/Users/UsersCreate";
import UsersEdit from "./components/Users/UsersEdit";
const App = () => {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource
        name="posts"
        list={PostsList}
        create={PostsCreate}
        edit={PostsEdit}
      />
      <Resource
        name="users"
        list={UsersList}
        create={UsersCreate}
        edit={UsersEdit}
      />
    </Admin>
  );
};

export default App;
