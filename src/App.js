import { useState, useEffect } from 'react';
import './App.css';
import CardLayout from './components/cardLayout';

function App() {

  const [start, setstart] = useState(0)
  const [end, setend] = useState(10)
  const [data, setdata] = useState([])

  useEffect(() => {
    async function getData() {
      await fetch('data.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setdata(data => [...data, ...myJson.colleges.slice(start,end)])
      });
    }

    async function handleScroll() {
      if(window.scrollY>1200) {
        if(start<50) {
          setstart(start => start+10)
          setend(end => end+10)
        }
      }
    }

    window.addEventListener('scroll', () => handleScroll());
    getData()

  }, [start,end]);

  return ( <div>
      <p className="page_title_style">Colleges in North India</p>
      <div className="App">
        { data.length>0 && data.map((val,ind) => {
          return <CardLayout val={val} key={ind+1} />
        })}
      </div>
    </div>
  );
}

export default App;
