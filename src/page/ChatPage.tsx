import React, { useEffect, useState } from 'react'
import {getDatabase, set, ref, onChildAdded, onChildChanged, DataSnapshot} from 'firebase/database'
interface IMessage{
  name: string,
  message: string
}
function ChatPage() {
  const db = getDatabase();
  
  const [message, setMessage] = useState<string>('');
  const [list, setList] = useState<IMessage[]>([]);
  const enter = (evt: React.KeyboardEvent) => {
    let timestamp = Date.now()
    if(evt.code === 'Enter'){
      set(ref(db, 'chat/' + timestamp ), {
        name: 'emirhan',
        message: message
      })
      
    }
  }
  const rootRef = ref(db, '/chat');
  onChildAdded(rootRef, (snapshot)=>{
    console.log(snapshot.val())
    
  })
  
  return (
    <div className="container">
      <div className="row m-4 border">
        <input onChange={evt=> setMessage(evt.target.value)} onKeyDown={enter} type="text" className='form-control' placeholder='message'/>
      </div>
      <div className="row mt-3">
        {
          list.map((ms, index)=> {
            return(
              <label className='form-label'>{ms.name + ' : ' + ms.message}</label>
            )
          })
        }
      </div>
    </div>
  )
}

export default ChatPage