import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = () => fs.readdirSync("content").map(fileName => {
    const post = fs.readFileSync(path.resolve("content", fileName), "utf-8");
    let {data} = grayMatter(post)
    let {birthtime} = fs.statSync(path.resolve("content", fileName))
    birthtime = new Date(birthtime)
    // birthtime = birthtime.format()
    // console.log();
    return data
});

export function get(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify(getAllPosts()));
}