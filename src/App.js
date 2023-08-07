import './App.css';

function App() {
  return (
    <div style={{border: '5px solid red', height: '97vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} className="App">
      <div className='summaryView' style={{border: '5px solid yellow', flex: 3, display: 'flex'}}>
        <div style={{border: '5px solid blue', flex: 5}}>Total Utangs Pane</div>
        <div style={{border: '5px solid violet', flex: 5}}>Something na graph</div>
      </div>
      <div className='summaryView' style={{border: '5px solid green', flex: 7}}>
        List View
      </div>
    </div>
  );
}

export default App;
