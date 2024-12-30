import React from "react";
import { MdOutlineMarkChatUnread } from "react-icons/md";

const recentChat = () => {
  const ChatData = [
    {
      id: 1,
      list: "How mintrix help us to grow ?",
    },
    {
      id: 2,
      list: "Tell me more anout Mintrix",
    },
    {
      id: 3,
      list: "Give the some reasons why mintrix is best for us",
    },
    {
      id: 4,
      list: "How mintrix help us to grow ?",
    },
    {
      id: 5,
      list: "How mintrix help us to grow ?",
    },
  ];
  return (
    <div>
      <div className="mt-10 ml-2">
        <h2 className="text-white  text-[16px] px-3 ">Recent Chats</h2>

        <ul className="mt-3">
          {ChatData.map((item, index) => (
            <li
              key={index}
              className="flex font-light text-[15px] gap-2 cursor-pointer items-center bg-gray-750 py-2 rounded-md px-3"
            >
              {" "}
              <span>
                <MdOutlineMarkChatUnread />{" "}
              </span>
             {item.list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default recentChat;
