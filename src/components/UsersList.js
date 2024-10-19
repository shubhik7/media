import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, addUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  //const dispatch = useDispatch();

  //   const { data, isLoading, error } = useSelector((state) => {
  //     return state.users;
  //   });

  const { data } = useSelector((state) => {
    return state.users;
  });

  // adding [dispatch] only coz of eslint
  //   useEffect(() => {
  //     dispatch(fetchUsers());
  //   }, [dispatch]);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  //   const handleUserAdd = () => {
  //     dispatch(addUser());
  //   };

  const handleUserAdd = () => {
    doCreateUser();
  };
  //   if (isLoading) {
  //     return <Skeleton times={6} className="h-10 w-full" />;
  //   }

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  }

  //   if (error) {
  //     // return <div>{error.message}</div>;
  //     return <div>Error fetching data...</div>;
  //   }
  else if (loadingUsersError) {
    // return <div>{error.message}</div>;
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && "Error creating user..."}
      </div>
      {content}
    </div>
  );
}
export default UsersList;
