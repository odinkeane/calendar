import './Lesson.css'

const backgrounds = {
    "Python Journey Junior 11": "rgba(209, 234, 237, 1)",
    "Python Journey Junior 41": "rgba(255, 218, 218, 1)",
    "Python Journey Junior 42": "rgba(237, 233, 209, 1)",
    "JavaScript Mastery Middle": "rgba(233, 209, 237, 1)",
    "JavaScript Mastery Junior": "rgba(211, 237, 209, 1)"
}


export default function Lesson({ title, date, theme, time }) {
    time = time.map(t => {
        const split = t.split("-")
        for (let i = 0; i < 2; i++) {
            let s = split[i].split(":")
            s[0] = (+s[0] + 4).toString()
            split[i] = `${s[0]}:${s[1]}`
        }
        return `${split[0]}-${split[1]}`
    })
    return (
        <div style={{ background: backgrounds[title] }} className="lesson">
            <header>
                <h2>{theme}</h2>
                <h3>{title}</h3>
            </header>
            <p className='time'><span>Время:</span>{time.map(t => <span key={t}>{t}</span>)}</p>
        </div>
    )
}