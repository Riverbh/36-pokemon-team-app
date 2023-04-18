
import './App.css';
import Header from './Components/Header';
import { useState } from 'react'
import TeamScreen from './Screens/TeamScreen';
import DexScreen from './Screens/DexScreen';

function App() {
  const [teamPage, setTeamPage] = useState(false)

  const changePage = (value) => {
    if(teamPage === value){
      return
    }
    setTeamPage(value)
  }

  console.log("CURRENT PAGE", teamPage)

  return (
    <div className="App">
      <Header />
      <div className='row-container'>
        <button onClick={() => changePage(true)}>Team</button>
        <button onClick={() => changePage(false)}>Dex</button>
      </div>
      {teamPage ? <TeamScreen /> : <DexScreen/>}
    </div>
  );
}

export default App;
