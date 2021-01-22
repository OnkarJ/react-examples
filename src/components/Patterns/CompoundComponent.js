import React from "react";
import Chat from "./Chat";

function CompoundComponent() {
  return (
    <div style={{textAlign: 'center'}}>
      <Chat>
      <Chat.Messages />
        <Chat.Input />
        <Chat.Button />
        
      </Chat>
    </div>
  );
}

export default CompoundComponent