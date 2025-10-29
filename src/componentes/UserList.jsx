import { useFetchData } from "./hooks/useFetchData";

export const UserList = ({ endPoint }) => {
  const { data, isLoading } = useFetchData(endPoint);

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {endPoint === "users"
            ? data.map((user) => (
                <li key={user.id}>
                  Nombre: {user.name} | Email: {user.email}
                </li>
              ))
            : data.map((item) => (
                <li key={item.id}>
                  Cuerpo: {item.body}
                </li>
              ))}
        </ul>
      )}
    </>
  );
};
