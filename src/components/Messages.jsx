import React from "react";

const messages = [
  {
    initials: "SW",
    name: "Samantha Wilson",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
  },
  {
    initials: "TS",
    name: "Tony Soup",
    preview: "Lorem ipsum dolor sit amet...",
    time: "11:20 AM",
  },
  {
    initials: "JS",
    name: "James Saber",
    preview: "Lorem ipsum dolor sit amet...",
    time: "10:08 AM",
  },
  {
    initials: "NA",
    name: "Nashit Ali",
    preview: "Lorem ipsum dolor sit amet...",
    time: "9:15 AM",
  },
];

const Messages = () => {
  return (
    <div className="bg-white rounded-2xl p-5 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">Messages</h2>

      <div className="space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className="flex justify-between items-center">
            {/* Avatar and text */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-10 rounded-full bg-purple-200 text-white flex items-center justify-center font-semibold">
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{msg.name}</p>
                <p className="text-xs text-gray-400">{msg.preview}</p>
              </div>
            </div>

            {/* Timestamp */}
            <span className="text-xs text-gray-400">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* View more */}
      <div className="flex justify-center mt-6">
        <button className="px-15 py-4 bg-[#EDEBFB] text-[#4D44B5] rounded-full text-sm font-bold hover:bg-[#dad6fa] transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default Messages;
