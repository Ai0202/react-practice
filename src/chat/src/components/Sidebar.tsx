import React from "react";

type Props = {
  users: any[],
}

export const Sidebar: React.FC<Props> = props => {
  const { users } = props;

  return (
    <aside id="sidebar" className="sidebar">
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </aside>
  )
}