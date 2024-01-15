import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import ListItem from "./list_item";
import { TUser } from "../data/user_list";
import { composeClassName } from "../utils";

type Tprops = {
  searchData: Array<TUser>;
  blockList: Array<TUser>;
  onSubmit: (data: TUser) => void;
  onEdit: () => void;
  onFocus: () => void;
  onBlur: () => void;
};

const SearchInput = (props: Tprops) => {
  const { searchData, blockList } = props;

  const searchTextRef = useRef<HTMLInputElement>(null);

  const [filteredData, setFilteredData] = useState<TUser[] | []>([]);
  const [itemIndex, setItemIndex] = useState(-1);

  const executeFilter = (query: string) => {
    if (!query) {
      setFilteredData([]);
      return;
    }

    const result = searchData.filter(
      (ele) =>
        blockList.find((block_ele) => block_ele.userId === ele.userId) ===
          undefined && ele.username.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(result);
    setItemIndex(-1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search_text = event.target.value;
    executeFilter(search_text);
  };

  const consume_key = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && searchTextRef.current!.value === "") {
      const [last_ele] = blockList.slice(-1);

      if (last_ele) {
        searchTextRef.current!.value = last_ele.username;
        executeFilter(last_ele.avatar);
      }

      props.onEdit();
    }

    if (event.key === "ArrowDown" && itemIndex < filteredData.length) {
      setItemIndex(itemIndex + 1);
    }

    if (event.key === "ArrowUp" && itemIndex > 0) {
      setItemIndex(itemIndex - 1);
    }
  };

  const handleSubmit = (data: TUser) => {
    props.onSubmit(data);
    setFilteredData([]);
    setItemIndex(-1);
    searchTextRef.current!.value = "";
  };

  return (
    <form
      className="custom-form-control"
      onSubmit={(e) => {
        e.preventDefault();

        if (filteredData.length > 0) {
          let idx = itemIndex;

          // if noting selected add the first ele
          if (idx === -1) {
            idx++;
          }
          handleSubmit(filteredData[idx]);
        }
      }}
    >
      <input
        autoFocus
        ref={searchTextRef}
        type="text"
        name="chipInput"
        placeholder="Enter Username Here..."
        aria-label="Chip Input"
        className={"search-text-input"}
        onChange={handleChange}
        onKeyDown={consume_key}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      <input type="submit" hidden />
      <div
        className={composeClassName([
          "drop-down-list",
          filteredData.length > 0 ? "drop-down-list--active" : "",
        ])}
      >
        {filteredData.map((ele, idx) => (
          <ListItem
            key={ele.userId}
            onClick={() => handleSubmit(ele)}
            isSelected={itemIndex === idx}
            avatar={ele.avatar}
            title={ele.username}
            email={ele.email}
          />
        ))}
      </div>
    </form>
  );
};

export default SearchInput;
