import Lesson from "../Lesson/Lesson"


export default function DayContainer({data}) {

    return (
        <>
            {data
                ?.sort((a, b) => a.time[0].localeCompare(b.time[0]))
                .map(lesson => <Lesson key={lesson.date + lesson.time} {...lesson} />)}
        </>
    )
}