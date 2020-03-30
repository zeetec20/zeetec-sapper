import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = (postslug, postdata) => fs.readdirSync("content").map(fileName => {
    const post = fs.readFileSync(path.resolve("content", fileName), "utf-8");
    const {content, data} = grayMatter(post)
    if (postdata) {
        return data
    } else if (postslug != '' || postslug != undefined) {

    } else {
        return {content, data}
    }
});

export function get(req, res, next) {
    const {get} = req.query
    let posts
    if (get == 'blog') {
        posts = getAllPosts();
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(posts));
    } else if (get == 'blog/data') {
        posts = getAllPosts(undefined, true);
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(posts));
    } else {
        next()
    }
}