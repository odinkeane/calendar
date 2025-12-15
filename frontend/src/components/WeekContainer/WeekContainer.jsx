import { getCurrentDate } from "../../utils/proccessing";
import DayContainer from "../DayContainer/DayContainer";

export default function WeekContainer({ week }) {
    console.log(week);
    const weekDay = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
    
    return (
        <div className="week" >
            {Object.entries(week).map(([date, data], index) => {
                console.log(date, data, index)
                return (
                    <div className="week-day" style={{background: getCurrentDate()==date? "rgb(233, 255, 249)": ""}}>
                        <h3>{weekDay[index]}<br />{date}</h3>
                        {data && <DayContainer data={data.data} />}
                    </div>
                )
            })}
        </div>
    )
}