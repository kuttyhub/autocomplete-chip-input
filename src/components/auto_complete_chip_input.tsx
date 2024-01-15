import { useEffect, useState } from "react";

import { USERS as userData, TUser } from "../data/user_list";
import Chip from "./chip";
import SearchInput from "./search_input";
import { composeClassName } from "../utils";

const AutocompleteChipInput = () => {
  const [userList, setUserList] = useState<TUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<TUser[]>([]);

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setUserList(userData);
  }, []);

  const removeSelectedUser = (user: TUser) => {
    const data = selectedUsers.filter((ele) => ele.userId !== user.userId);
    setSelectedUsers(data);
  };

  const handle_edit = () => {
    const [last_ele] = selectedUsers.slice(-1);
    if (last_ele) {
      removeSelectedUser(last_ele);
    }
  };

  const addSelectedUser = (user: TUser) => {
    setSelectedUsers((prev) => [...prev, user]);
  };
  return (
    <div
      className={composeClassName([
        "chip-search-container",
        isFocused ? "chip-search-container--focus" : "",
      ])}
    >
      {selectedUsers.map((user) => (
        <Chip
          key={user.userId}
          avatar={user.avatar}
          title={user.username}
          onClose={() => removeSelectedUser(user)}
        />
      ))}
      <SearchInput
        searchData={userList}
        blockList={selectedUsers}
        onEdit={handle_edit}
        onSubmit={addSelectedUser}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default AutocompleteChipInput;
