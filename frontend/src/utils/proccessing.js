export async function getData() {
    const data = await fetch("/api/get-data").then(res => res.json()).then(res => res.data)
    return data
}

export function unite(data) {
    return data.reduce((all, arr) => all.concat(arr), [])
}

const monthToNumber = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
}

export function getCurrentDate(date = new Date()) {
    const now = date.toDateString().split(" ").slice(1)
    return `${now[2]}-${monthToNumber[now[0]]}-${now[1]}`
}

export function groupByDate(data) {
    const grouped = {}
    for (const lesson of data) {
        if (!(lesson.date in grouped)) {
            grouped[lesson.date] = []
        }
        grouped[lesson.date].push(lesson)
    }
    return grouped
}

export function getCurrentDateToString(today = new Date()) {
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(today);
    return formattedDate
}


export function getWeekMonday(day = new Date()) {
    while (day.getDay() !== 1) day = new Date(+day - 24 * 60 * 60 * 1000)
    return day
}


export function getWeekData(data, currentWeek) {
    const weekData = {}
    if (data && currentWeek) {
        for (let i = 0; i < 7; i++) {
            weekData[getCurrentDate(currentWeek)] = {
                date: getCurrentDate(currentWeek),
                data: data[getCurrentDate(currentWeek)]
            }
            currentWeek = new Date(+currentWeek + 24 * 60 * 60 * 1000)
        }
        return weekData
    }
    return {}
}

export function getCurrentWeekToString(currentWeek) {
    const monday = getWeekMonday(currentWeek)
    const sunday = new Date(+monday + 24 * 60 * 60 * 1000 * 6)
    return getCurrentDateToString(monday) + " - " + getCurrentDateToString(sunday);
}