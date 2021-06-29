import React, { useState, useEffect, MouseEvent } from "react";

import api from "../../services/api";

import { UsersContainer, UserCard } from "./styles";

interface IUser {
  name: string;
  email: string;
  phone: string;
  site: string;
  address: UserAddress;
}

interface UserAddress {
  street: string;
  city: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    api.get("/users").then((response) => setUsers(response.data));
  }, []);
  return (
    <UsersContainer>
      <h1>Usuários</h1>
      <main>
        {users &&
          users.map((user) => (
            <UserCard>
              <section>
                <div className="image"></div>
                <div>
                  <span>{user.name}</span>
                  <span>{user.site}</span>
                </div>
              </section>
              <span>
                <strong>E-mail: </strong>
                {user.email}
              </span>
              <span>
                <strong>Telefone: </strong>
                {user.phone}
              </span>
              <span>
                <strong>Rua: </strong>
                {user.address.street}
              </span>
              <span>
                <strong>Cidade:</strong>
                {user.address.city}
              </span>
              <button onClick={(event: MouseEvent) => event.preventDefault()}>
                Ver mais
              </button>
            </UserCard>
          ))}
      </main>
    </UsersContainer>
  );
};

export default Users;
