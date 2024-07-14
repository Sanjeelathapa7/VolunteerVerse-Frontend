import React, { useState, useEffect } from 'react';
import { FaThumbtack, FaPaperclip, FaMicrophone, FaPaperPlane, FaTrash } from 'react-icons/fa';
import { ReactMic } from 'react-mic';

const Chat = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChatId, setActiveChatId] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);

  const [chats, setChats] = useState([
    {
      id: 1,
      title: 'Bagmati Clean',
      time: '4m',
      description: 'Needed 20+ volunteer for blood d...',
      thumbnail: 'https://www.cpsmumbai.org/Uploads/2762023161833920.png',
      messages: [
        {
          id: 1,
          user: 'Admin',
          content: 'Dear Volunteers, We are thrilled to announce our upcoming Blood Donation Drive...',
          type: 'text',
        },
        {
          id: 2,
          user: 'Sanji',
          content: 'Hi team! I think we’re pretty much set. I’ve confirmed the venue and time...',
          type: 'text',
        },
      ],
      unread: 1,
    },
    {
      id: 2,
      title: 'Environment Day',
      description: 'Needed 20+ volunteer for blood d...',
      time: '20m',
      thumbnail:
        'https://cdn.cdnparenting.com/articles/2019/06/27103045/1065729635-H-1-1024x700.webp',
      messages: [],
      unread: 0,
    },
    {
      id: 3,
      title: 'Blood Donationx',
      description: 'Needed 20+ volunteer for blood d..',
      time: '1hr ago',
      thumbnail: 'https://myrepublica.nagariknetwork.com/uploads/media/2018/May/Bagmati1.gif',
      messages: [],
      unread: 0,
    },
  ]);

  useEffect(() => {
    document.addEventListener('click', handleUserGesture);
    return () => document.removeEventListener('click', handleUserGesture);
  }, []);

  const handleUserGesture = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  };

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  const toggleRecording = () => {
    setIsRecording((prevState) => !prevState);
  };

  const onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    setRecordedBlob(recordedBlob);
    setIsRecording(false); // Stop recording after getting the recorded blob
  };

  const handleSendMessage = (recordedBlob = null) => {
    if (messageInput.trim() !== '' || recordedBlob) {
      const newMessage = recordedBlob
        ? {
            id: activeChat.messages.length + 1,
            user: 'You',
            content: recordedBlob.blobURL,
            type: 'audio',
          }
        : {
            id: activeChat.messages.length + 1,
            user: 'You',
            content: messageInput.trim(),
            type: 'text',
          };

      const updatedMessages = [...activeChat.messages, newMessage];
      const updatedChats = chats.map((chat) =>
        chat.id === activeChat.id ? { ...chat, messages: updatedMessages } : chat
      );

      setChats(updatedChats);
      setMessageInput(''); // Clear the text input
      setRecordedBlob(null); // Clear the recorded blob
    }
  };

  const handleSendVoiceMessage = () => {
    if (recordedBlob) {
      handleSendMessage(recordedBlob);
    }
  };

  const handleDeleteMessage = (messageId) => {
    if (activeChat) {
      const updatedMessages = activeChat.messages.filter((message) => message.id !== messageId);
      const updatedChats = chats.map((chat) =>
        chat.id === activeChat.id ? { ...chat, messages: updatedMessages } : chat
      );
      setChats(updatedChats);
      
      // Delete associated recorded blob if it exists
      const messageToDelete = activeChat.messages.find((message) => message.id === messageId);
      if (messageToDelete && messageToDelete.type === 'audio' && messageToDelete.content === recordedBlob.blobURL) {
        setRecordedBlob(null);
      }
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <img src="assets/images/Logo.png" alt="VolunteerVerse Logo" className="logo" />
        <ul style={styles.navList}>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="/event">Calendar</a>
          </li>
          <li>
            <a href="/eventDetails">Events</a>
          </li>
          <li className="active">
            <a href="/chat">Chat</a>
          </li>
          <li>
            <a href="#">Performance</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
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
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              style={{
                ...styles.chatItem,
                backgroundColor:
                  activeChatId === chat.id ? 'rgba(97, 124, 181, 0.22)' : 'transparent',
              }}
              onClick={() => setActiveChatId(chat.id)}
            >
              <img src={chat.thumbnail} alt="Chat Thumbnail" style={styles.chatThumbnail} />
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
                {activeChat.messages.map((message) => (
                  <div key={message.id} style={styles.message}>
                    {message.type === 'audio' ? (
                      <div>
                        <audio controls>
                          <source src={message.content} type="audio/mp3" />
                          Your browser does not support the audio element.
                        </audio>
                        <FaTrash
                          style={styles.inputIcons}
                          onClick={() => handleDeleteMessage(message.id)}
                        />
                      </div>
                    ) : (
                      <>
                        <img
                          src="https://via.placeholder.com/40"
                          alt="User"
                          style={styles.messageUserImage}
                        />
                        <div style={styles.messageContent}>
                          <p>
                            <strong>{message.user}</strong>
                          </p>
                          <p>{message.content}</p>
                          <FaTrash
                            style={styles.inputIcons}
                            onClick={() => handleDeleteMessage(message.id)}
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div style={styles.messageInput}>
                <FaPaperclip style={styles.inputIcons} />
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  style={styles.messageInputBox}
                />
                <FaMicrophone style={styles.inputIcons} onClick={toggleRecording} />
                <ReactMic
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop}
                  onData={onData}
                  strokeColor="#000000"
                  backgroundColor="#ffffff"
                  style={{ display: 'none' }}
                />
                {recordedBlob && (
                  <>
                    <button style={styles.recordingButton} onClick={handleSendVoiceMessage}>
                      Send VM
                    </button>
                    <button style={styles.recordingButton} onClick={() => setRecordedBlob(null)}>
                      Cancel
                    </button>
                  </>
                )}
                <FaPaperPlane
                  style={styles.inputIcons}
                  onClick={() => handleSendMessage()}
                />
              </div>
            </>
          ) : (
            <div style={styles.noActiveChat}>No active chat</div>
          )}
        </div>
      </div>
      <style jsx>{`
       nav {
          width: 250px;
          height: 100vh;
          background-color: #ffffff;
          padding: 23px;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(0, 0, 0.1, 0.2);
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
          margin: 10px 0;
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
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
  chatContainer: {
    display: 'flex',
    flex: 1,
    height: '100vh',
  },
  chatList: {
    width: '450px',
    borderRight: '1px solid #ddd',
    padding: '20px',
    overflowY: 'auto',
  },
  searchBox: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  chatItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
  },
  chatThumbnail: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  chatDetails: {
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: '#1a73e8',
    color: '#fff',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '12px',
  },
  chatTime: {
    color: '#999',
  },
  pinIcon: {
    color: '#1a73e8',
    marginLeft: '10px',
  },
  chatContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  chatHeader: {
    padding: '20px',
    borderBottom: '1px solid #ddd',
  },
  messages: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  messageUserImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  messageContent: {
    background: '#f1f1f1',
    padding: '10px',
    borderRadius: '5px',
    flex: 1,
  },
  messageInput: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderTop: '1px solid #ddd',
  },
  inputIcons: {
    margin: '0 10px',
    cursor: 'pointer',
  },
  messageInputBox: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  noActiveChat: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#999',
  },
  recordingButton: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Chat;
