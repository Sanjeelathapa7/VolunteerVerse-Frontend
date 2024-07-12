


// import React, { useState } from "react";
// import { FaThumbtack, FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa"; // Import additional icons

// const Chat = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeChatId, setActiveChatId] = useState(null);
//   const [messageInput, setMessageInput] = useState("");

//   const [chats, setChats] = useState([
//     {
//       id: 1,
//       title: "Blood Donation Chat",
//       time: "4m",
//       description: "Needed 20+ volunteer for blood d...",
//       thumbnail: "https://via.placeholder.com/40",
//       messages: [
//         {
//           id: 1,
//           user: "Admin",
//           content: "Dear Volunteers, We are thrilled to announce our upcoming Blood Donation Drive and we need your support to make it a success..."
//         },
//         {
//           id: 2,
//           user: "Sanji",
//           content: "Hi team! I think we’re pretty much set. I’ve confirmed the venue and time with the community center..."
//         },
//       ],
//       unread: 1, // Add unread message count
//     },
//     {
//       id: 2,
//       title: "Environment Day",
//       description: "Needed 20+ volunteer for blood d...",
//       time: "20m",
//       thumbnail: "https://via.placeholder.com/40",
//       messages: [],
//       unread: 0,
//     },
//     {
//       id: 3,
//       title: "Bagmati Clean",
//       description: "Needed 20+ volunteer for blood d..",
//       time: "1hr ago",
//       thumbnail: "https://via.placeholder.com/40",
//       messages: [],
//       unread: 0,
//     },
//   ]);

//   const filteredChats = chats.filter(chat =>
//     chat.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const activeChat = chats.find(chat => chat.id === activeChatId);

//   const handleSendMessage = () => {
//     if (messageInput.trim() !== "" && activeChat) {
//       const newMessage = {
//         id: activeChat.messages.length + 1,
//         user: "You",
//         content: messageInput.trim()
//       };
//       // Create a new array to update state immutably
//       const updatedMessages = [...activeChat.messages, newMessage];
//       setActiveChatId(activeChat.id); // Ensure active chat remains active after sending message
//       // Update the chats array immutably
//       const updatedChats = chats.map(chat =>
//         chat.id === activeChat.id ? { ...chat, messages: updatedMessages } : chat
//       );
//       // Update the state with the new messages
//       setChats(updatedChats);
//       setMessageInput(""); // Clear the message input after sending
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <nav>
//         <img src="assets/images/Logo.png" alt="VolunteerVerse Logo" className="logo" />
//         <ul>
//           <li><a href="#">Dashboard</a></li>
//           <li><a href="/event">Calendar</a></li>
//           <li><a href="/eventDetails">Events</a></li>
//           <li className="active"><a href="/chat">Chat</a></li>
//           <li><a href="#">Performance</a></li>
//           <li><a href="/profile">Profile</a></li>
//         </ul>
//       </nav>
//       <div style={styles.chatContainer}>
//         <div style={styles.chatList}>
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={styles.searchBox}
//           />
//           {filteredChats.map(chat => (
//             <div
//               key={chat.id}
//               style={{
//                 ...styles.chatItem,
//                 backgroundColor: activeChatId === chat.id ? "rgba(97, 124, 181, 0.22)" : "transparent"
//               }}
//               onClick={() => setActiveChatId(chat.id)}
//             >
//               <img
//                 src={chat.thumbnail}
//                 alt="Chat Thumbnail"
//                 style={styles.chatThumbnail}
//               />
//               <div style={styles.chatDetails}>
//                 <h4>{chat.title}</h4>
//                 <p>{chat.description}</p>
//                 {chat.unread > 0 && <span style={styles.unreadBadge}>{chat.unread}</span>}
//               </div>
//               <span style={styles.chatTime}>{chat.time}</span>
//               <FaThumbtack style={styles.pinIcon} /> {/* Pin icon */}
//             </div>
//           ))}
//         </div>
//         <div style={styles.chatContent}>
//           {activeChat ? (
//             <>
//               <div style={styles.chatHeader}>
//                 <h3>{activeChat.title}</h3>
//                 <p>{activeChat.messages.length} members, 3 online</p>
//               </div>
//               <div style={styles.messages}>
//                 {activeChat.messages.map(message => (
//                   <div key={message.id} style={styles.message}>
//                     <img
//                       src="https://via.placeholder.com/40"
//                       alt="User"
//                       style={styles.messageUserImage}
//                     />
//                     <div style={styles.messageContent}>
//                       <p><strong>{message.user}</strong></p>
//                       <p>{message.content}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div style={styles.messageInput}>
//                 <FaPaperclip style={styles.inputIcons} />
//                 <div style={{ position: 'relative' }}>
//                   <input
//                     type="text"
//                     placeholder="Your message"
//                     value={messageInput}
//                     onChange={(e) => setMessageInput(e.target.value)}
//                     style={{ ...styles.messageInputBox, paddingLeft: '30px' }} // Adjust padding to accommodate icons
//                   />
//                   <FaMicrophone style={{ ...styles.inputIcons, position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '20px' }} />
//                 </div>
//                 <FaPaperPlane style={styles.inputIcons} onClick={handleSendMessage} />
//               </div>
//             </>
//           ) : (
//             <div style={styles.noActiveChat}>Select a chat to view messages</div>
//           )}
//         </div>
//       </div>
//       <style jsx>{`
//         nav {
//           width: 220px;
//           height: 100vh;
//           background-color: #ffffff;
//           padding: 23px;
//           box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           border: 1px solid rgba(0, 0, 0.1, 0.2);
//         }

//         nav img.logo {
//           width: 95%;
//           margin-bottom: 0px;
//         }

//         nav ul {
//           list-style: none;
//           padding: 0;
//           width: 100%;
//         }

//         nav ul li {
//           margin: 5px 0;
//         }

//         nav ul li a {
//           text-decoration: none;
//           color: #333;
//           display: block;
//           padding: 10px 20px;
//           border-radius: 5px;
//           transition: background-color 0.3s;
//         }

//         nav ul li a:hover,
//         nav ul li.active a {
//           background-color: rgba(26, 76, 110, 0.21);
//           color: #333;
//         }

//         main {
//           flex-grow: 1;
//           padding: 50px;
//           overflow-y: auto;
//         }
//       `}</style>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     fontFamily: "Arial, sans-serif",
//   },
//   chatContainer: {
//     display: "flex",
//     width: "100%", // Adjusted to take full width
//   },
//   chatList: {
//     width: "50%", // Adjusted to be narrower
//     borderRight: "1px solid #ddd",
//     padding: "20px",
//   },
//   searchBox: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "20px",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//   },
//   chatItem: {
//     display: "flex",
//     alignItems: "center",
//     padding: "10px 0",
//     borderBottom: "1px solid #ddd",
//     cursor: "pointer",
//     position: "relative",
//   },
//   chatThumbnail: {
//     marginRight: "10px",
//   },
//   chatDetails: {
//     flex: 1,
//     position: "relative",
//   },
//   chatTime: {
//     color: "#888",
//     marginBottom: "50px"
//   },
//   chatContent: {
//     width: "75%", // Adjusted to be wider
//     padding: "20px", // Adjusted padding for better fit
//   },
//   chatHeader: {
//     marginBottom: "20px",
//   },
//   messages: {
//     marginBottom: "20px",
//   },
//   message: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "10px",
//   },
//   messageUserImage: {
//     marginRight: "10px",
//   },
//   messageContent: {
//     flex: 1,
//   },
//   messageInput: {
//     display: "flex",
//     alignItems: "center",
//   },
//    messageInputBox: {
//         flex: 1,
//         padding: "10px",
//         borderRadius: "5px",
//         border: "1px solid #ddd",
//         marginLeft: "10px",
//         marginRight: "10px",
//         marginTop: "180px",
//         marginBottom: "180px",
//         width:"540px"
//       },
//       sendButton: {
//         padding: "10px",
//         borderRadius: "5px",
//         border: "none",
//         backgroundColor: "#007bff",
//         color: "#fff",
//         cursor: "pointer",
//       },
//       noActiveChat: {
//         padding: "20px",
//         textAlign: "center",
//         color: "#888",
//       },
//       unreadBadge: {
//         position: "absolute",
//         top: "65%",
//         right: "0px",
//         transform: "translateY(-50%)",
//         backgroundColor: "#ff0000",
//         color: "#fff",
//         borderRadius: "50%",
//         padding: "4px 10px",
//         fontSize: "12px",
//         fontWeight: "bold",
//       },
//       pinIcon: {
//         position: "absolute",
//         right: "2px",
//     top:"49%",
//         color: "#888",
//         marginLeft: "0px",
//       },
//   inputIcons: {
//     color: "#888",
//     cursor: "pointer",
//   },
// };

// export default Chat;



import React, { useState } from "react";
import { FaThumbtack, FaPaperclip, FaMicrophone, FaPaperPlane, FaTrash } from "react-icons/fa"; // Import additional icons

const Chat = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChatId, setActiveChatId] = useState(null);
  const [messageInput, setMessageInput] = useState("");

  const [chats, setChats] = useState([
    {
      id: 1,
      title: "Blood Donation Chat",
      time: "4m",
      description: "Needed 20+ volunteer for blood d...",
      thumbnail: "https://www.cpsmumbai.org/Uploads/2762023161833920.png",
      messages: [
        {
          id: 1,
          user: "Admin",
          content: "Dear Volunteers, We are thrilled to announce our upcoming Blood Donation Drive and we need your support to make it a success..."
        },
        {
          id: 2,
          user: "Sanji",
          content: "Hi team! I think we’re pretty much set. I’ve confirmed the venue and time with the community center..."
        },
      ],
      unread: 1,
    },
    {
      id: 2,
      title: "Environment Day",
      description: "Needed 20+ volunteer for blood d...",
      time: "20m",
      thumbnail: "https://cdn.cdnparenting.com/articles/2019/06/27103045/1065729635-H-1-1024x700.webp",
      messages: [],
      unread: 0,
    },
    {
      id: 3,
      title: "Bagmati Clean",
      description: "Needed 20+ volunteer for blood d..",
      time: "1hr ago",
      thumbnail: "https://myrepublica.nagariknetwork.com/uploads/media/2018/May/Bagmati1.gif" ,
      messages: [],
      unread: 0,
    },
  ]);

  const filteredChats = chats.filter(chat =>
    chat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeChat = chats.find(chat => chat.id === activeChatId);

  const handleSendMessage = () => {
    if (messageInput.trim() !== "" && activeChat) {
      const newMessage = {
        id: activeChat.messages.length + 1,
        user: "You",
        content: messageInput.trim()
      };
      const updatedMessages = [...activeChat.messages, newMessage];
      setActiveChatId(activeChat.id);
      const updatedChats = chats.map(chat =>
        chat.id === activeChat.id ? { ...chat, messages: updatedMessages } : chat
      );
      setChats(updatedChats);
      setMessageInput("");
    }
  };

  const handleDeleteMessage = (messageId) => {
    if (activeChat) {
      const updatedMessages = activeChat.messages.filter(message => message.id !== messageId);
      const updatedChats = chats.map(chat =>
        chat.id === activeChat.id ? { ...chat, messages: updatedMessages } : chat
      );
      setChats(updatedChats);
    }
  };

  return (
    <div style={styles.container}>
      <nav>
        <img src="assets/images/Logo.png" alt="VolunteerVerse Logo" className="logo" />
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="/event">Calendar</a></li>
          <li><a href="/eventDetails">Events</a></li>
          <li className="active"><a href="/chat">Chat</a></li>
          <li><a href="#">Performance</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
      <div style={styles.chatContainer}>
        <div style={styles.chatList}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchBox}
          />
          {filteredChats.map(chat => (
            <div
              key={chat.id}
              style={{
                ...styles.chatItem,
                backgroundColor: activeChatId === chat.id ? "rgba(97, 124, 181, 0.22)" : "transparent"
              }}
              onClick={() => setActiveChatId(chat.id)}
            >
              <img
                src={chat.thumbnail}
                alt="Chat Thumbnail"
                style={styles.chatThumbnail}
              />
              <div style={styles.chatDetails}>
                <h4>{chat.title}</h4>
                <p>{chat.description}</p>
                {chat.unread > 0 && <span style={styles.unreadBadge}>{chat.unread}</span>}
              </div>
              <span style={styles.chatTime}>{chat.time}</span>
              <FaThumbtack style={styles.pinIcon} />
            </div>
          ))}
        </div>
        <div style={styles.chatContent}>
          {activeChat ? (
            <>
              <div style={styles.chatHeader}>
                <h3>{activeChat.title}</h3>
                <p>{activeChat.messages.length} members, 3 online</p>
              </div>
              <div style={styles.messages}>
                {activeChat.messages.map(message => (
                  <div key={message.id} style={styles.message}>
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User"
                      style={styles.messageUserImage}
                    />
                    <div style={styles.messageContent}>
                      <p><strong>{message.user}</strong></p>
                      <p>{message.content}</p>
                    </div>
                    <FaTrash
                      style={styles.inputIcons}
                      onClick={() => handleDeleteMessage(message.id)}
                    />
                  </div>
                ))}
              </div>
              <div style={styles.messageInput}>
                <FaPaperclip style={styles.inputIcons} />
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Your message"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    style={{ ...styles.messageInputBox, paddingLeft: '30px' }}
                  />
                  <FaMicrophone style={{ ...styles.inputIcons, position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '20px' }} />
                </div>
                <FaPaperPlane style={styles.inputIcons} onClick={handleSendMessage} />
              </div>
            </>
          ) : (
            <div style={styles.noActiveChat}>Select a chat to view messages</div>
          )}
        </div>
      </div>
      <style jsx>{`
        nav {
          width: 220px;
          height: 100vh;
          background-color: #ffffff;
          padding: 23px;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(0, 0, 0, 0.1, 0.2);
        }

        nav img.logo {
          width: 95%;
          margin-bottom: 0px;
        }

        nav ul {
          list-style: none;
          padding: 0;
          width: 100%;
        }

        nav ul li {
          margin: 5px 0;
        }

        nav ul li a {
          text-decoration: none;
          color: #333;
          display: block;
          padding: 10px 20px;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        nav ul li a:hover,
        nav ul li.active a {
          background-color: rgba(26, 76, 110, 0.21);
          color: #333;
        }

        main {
          flex-grow: 1;
          padding: 50px;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    fontFamily: "Arial, sans-serif",
  },
  chatContainer: {
    display: "flex",
    width: "100%",
  },
  chatList: {
    width: "50%",
    borderRight: "1px solid #ddd",
    padding: "20px",
  },
  searchBox: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  chatItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
    position: "relative",
  },
  chatThumbnail: {
    marginRight: "10px",
    maxWidth: "70px", // Adjust the maximum width as needed
    maxHeight: "90px",
    borderRadius:"5px"
  },
  chatDetails: {
    flex: 1,
    position: "relative",
  },
  chatTime: {
    color: "#888",
    marginBottom: "50px"
  },
  chatContent: {
    width: "75%",
    padding: "20px",
  },
  chatHeader: {
    marginBottom: "20px",
  },
  messages: {
    marginBottom: "20px",
  },
  message: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  messageUserImage: {
    marginRight: "10px",
  },
  messageContent: {
    flex: 1,
  },
  messageInput: {
    display: "flex",
    alignItems: "center",
  },
  messageInputBox: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginLeft: "10px",
    marginRight: "10px",
  },
  sendButton: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  noActiveChat: {
    padding: "20px",
    textAlign: "center",
    color: "#888",
  },
  unreadBadge: {
    position: "absolute",
    top: "65%",
    right: "0px",
    transform: "translateY(-50%)",
    backgroundColor: "#ff0000",
    color: "#fff",
    borderRadius: "50%",
    padding: "4px 10px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  pinIcon: {
    position: "absolute",
    right: "2px",
    top: "49%",
    color: "#888",
    marginLeft: "0px",
  },
  inputIcons: {
    color: "#888",
    cursor: "pointer",
  },
};

export default Chat;
