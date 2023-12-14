import React, { useState } from 'react';
import './index.css'; 
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import img from "../images/fourth.jpeg";

const Chatbot = () => {
  const [userMsg, setUserMsg] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([
    { text: "", isUser: false }
  ]);

  const [isTyping,setIsTyping]=useState(false)
  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/sentence-transformers/all-mpnet-base-v2",
      {
        headers: { Authorization: "Bearer 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"},
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }


  const sendMsg = async (e) => {
    e.preventDefault();
    setIsTyping(true)
    const response = await fetch('http://localhost:4000/getSearchResults', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: {
          source_sentence: userMsg,
          sentences: [],
        },
      }),
    });

    const responseData = await response.json();
    console.log(responseData);

    let sentences = [];
    responseData.map((work, index) => {
      sentences.push(`${work.location} ${work.title} ${work.hours} ${work.description} ${work.fees}`);
      return null;
    });

    const scores = await query({
      "inputs": {
        "source_sentence": userMsg,
        "sentences": sentences
      }
    });
    console.log(scores)

    const objectsWithScores = responseData.map((obj, index) => ({
      ...obj,
      score: scores[index]
    }));

    const sortedObjects = objectsWithScores.sort((a, b) => b.score - a.score);

    // Update the state to include the user message
    setMessages([
      ...messages,
      { text: userMsg, isUser: true },
    ]);

    // Update the state to include bot messages (showing details in cards)
    setMessages(prevMessages => ([
      ...prevMessages,
      ...sortedObjects.map((obj, index) => ({
        cardDetails: obj,
        text:'',
        isUser: false,
        key: index, // Ensure each message has a unique key
      })),
    ]));

    // Clear the input field
    setUserMsg('');
    setIsTyping(false)
  };
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  return (
    <>
      <button onClick={toggleChatbot} className='showChatBotBtn'>{showChatbot ? <CloseIcon sx={{color:"white"}}/> : <SendIcon sx={{color:"white"}}/> }</button>
      {showChatbot && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            
            <h2 style={{color:"white",border:"none",fontSize:"22px"}}>Ask us anything!</h2>
          </div>
          <div className="chatbot-chatarea">
            {isTyping ? (
              <div><p>Bot is Typing...</p></div>
            ):(
              <></>
            )}
            {messages.map((message, index) => (
             message.text.length > 0 || message.cardDetails?
              <div key={index} className={message.isUser  ? 'user-message' : 'bot-message'}>
                {message.isUser ? (
                  // User message
                  <p className='para-tag'>{message.text}</p>
                ) : (
                  // Bot message with details in cards
                  message.cardDetails ? (
              <>
                      <ul>
                        <li><strong>Name:</strong>{message.cardDetails.name}</li>
                        <li><strong>Location: </strong> {message.cardDetails.location}</li>
                        <li><strong>Title: </strong> {message.cardDetails.title}</li>
                        <li><strong>Hours: </strong>{message.cardDetails.hours}</li>
                        <li><strong>Fees:</strong>{message.cardDetails.fees}</li>
                        
                      </ul>
                    
                      </>
                  ) : (
                    <></>
                  )
                )}
              </div>
              :
              <></>
            ))}
          </div>
          <div className="chatbot-footer">
            <form onSubmit={sendMsg}>
              <input
                type="text"
                placeholder="Type your query..."
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
              />
              <button type="submit">
                <SendIcon sx={{ color: 'white' }} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>

  );
};

export default Chatbot;
