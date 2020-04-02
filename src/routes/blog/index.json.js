import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = () => fs.readdirSync("content").sort().map(fileName => {
    const post = fs.readFileSync(path.resolve("content", fileName), "utf-8");
    let {data} = grayMatter(post)
    let {birthtime} = fs.statSync(path.resolve("content", fileName))
	let days = [
		'Sunday', 
		'Monday', 
		'Tuesday', 
		'Wednesday',
		'Thurday',
		'Friday',
		'Saturday'
    ]
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Agust',
        'September',
        'October',
        'November',
        'December'
    ]

    birthtime = new Date(birthtime)
    let dateNow = new Date()

    function descDate(date) {
        return `(${dateNow.getDate() - date} day${dateNow.getDate() - date == 1 ? '' : 's'} ago)`
    }
    function descMonth(month) {
        return `(${dateNow.getMonth() - month} month${dateNow.getMonth() - month == 1 ? '' : 's'} ago)`
    }
    function descYear(year) {
        return `(${dateNow.getFullYear() - year} year${dateNow.getFullYear() - year == 1 ? '' : 's'} ago)`
    }
    // let descDate = birthtime.toDateString() == dateNow.toDateString() ? `` : birthtime.getMonth() == dateNow.getMonth() ? '' : birthtime.getFullYear() == dateNow.getFullYear() ? '' : ''
    let descTime = birthtime.getFullYear() == dateNow.getFullYear() ? birthtime.getMonth() == dateNow.getMonth() ? birthtime.getDate() == dateNow.getDate() ? '(new)' : descDate(birthtime.getDate()) : descMonth(birthtime.getMonth()) : descYear(birthtime.getFullYear())
    data['date'] = `${days[birthtime.getDay()]},  ${months[birthtime.getMonth()]} ${birthtime.getDate()} ${birthtime.getFullYear()} ${descTime}`
    return data
});

export function get(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify(getAllPosts()));
}