import './App.css';
import React from 'react'
function App() {
  const phrases = ['web app development','mobile app development','UI/UX design']
  const [displayPhrase,setDisplayPhrase] = React.useState('')
  for(var i=0;i<phrases.length;i++){
    var sel = phrases[i]
    for(var j=0;j<sel;j++){
       (displayPhrase === phrases[i])?
       setDisplayPhrase('')
       :
       setDisplayPhrase(...displayPhrase,sel[i])
    }
  }
  
  return (
    <div style={container}>
      <div style={quote}>I'm Gokul , good in </div>
      <div style={cursor}>{displayPhrase}</div>
    </div>
  );
}

const cursor = {
  height:'25px',
  width:'4px',
  backgroundColor:'green',
}


const container = {
  position:'absolute',
}

const quote={
  position:'relative'
}

export default App;
