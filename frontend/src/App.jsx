
import { useEffect, useState } from 'react';
import { getData, unite, getCurrentDate, groupByDate, getCurrentWeekToString, getCurrentDateToString, getWeekMonday, getWeekData } from './utils/proccessing.js'
import { RightArrow, LeftArrow } from './components/Arrows/Arrows.jsx';
import DayContainer from './components/DayContainer/DayContainer.jsx';
import './App.css';
import WeekContainer from './components/WeekContainer/WeekContainer.jsx';



function App() {
  const [data, setData] = useState([])
  const [currentDay, setCurrentDay] = useState(new Date())
  const [currentWeek, setCurrentWeek] = useState(null)
  const [dataWeek, setDataWeek] = useState(getWeekData())
  const [type, setType] = useState("day")

  useEffect(() => {
    getData()
      .then(res => unite(res))
      .then(res => groupByDate(res))
      .then(res => setData(res))
      .catch(err => {
        console.error(err);
        setData([])
      })
  }, [])




  useEffect(() => {
    setCurrentWeek(getWeekMonday(currentDay))
  }, [currentDay])

  useEffect(() => {
    setDataWeek(getWeekData(data, currentWeek))
  }, [data, currentDay, currentWeek])



  const previousDay = () => setCurrentDay(new Date(+currentDay - 24 * 60 * 60 * 1000))
  const nextDay = () => setCurrentDay(new Date(+currentDay + 24 * 60 * 60 * 1000))

  const previousWeek = () => { setCurrentWeek(new Date(+currentWeek - 24 * 60 * 60 * 1000 * 7)) }
  const nextWeek = () => { setCurrentWeek(new Date(+currentWeek + 24 * 60 * 60 * 1000 * 7)) }


  return (
    <main>
      <div className='container'>
        <header>
          <div className='date'>
            <button onClick={() => type === "day" ? previousDay() : previousWeek()}>
              <LeftArrow />
            </button>
            <h1>

              {type === "day" && getCurrentDateToString(currentDay)}
              {type === "week" && getCurrentWeekToString(currentWeek)}
            </h1>
            <button onClick={() => type === "day" ? nextDay() : nextWeek()}>
              <RightArrow />
            </button>
          </div>
          <div className='show-type'>
            <button onClick={() => setType("day")} className={type === "day" ? "active" : ""}>День</button>
            <button onClick={() => setType("week")} className={type === "week" ? "active" : ""}>Неделя</button>
          </div>
        </header>
        {type === "day" && <DayContainer data={data[getCurrentDate(currentDay)]} />}
        {type === "week" && <WeekContainer week={dataWeek} />}

      </div>
    </main>
  );
}

export default App;
