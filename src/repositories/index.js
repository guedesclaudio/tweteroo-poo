const usuarios = [];
const tweets = [];
import Service from "../services/index.js";
const service = new Service;
import { reverseTweets } from "../services/index.js";

export class User {
    constructor(username, avatar) {
        this.username = username;
        this.avatar = avatar;
    }

    postUser() {
        return usuarios.push({username: this.username, avatar: this.avatar});
    }
}

export class Tweet {
    constructor(username, tweet, page) {
        this.username = username;
        this.tweet = tweet;
        this.page = page;
    }

    post() {
        const avatar = service.getAvatar(usuarios, this.username);
        return tweets.push({ username: this.username, tweet: this.tweet, avatar });
    }

    list() {
        console.log(tweets);
        const limite = 10;
        const start = (this.page - 1) * limite;
        const end = this.page * limite;

        if (tweets.length <= 10) {
            return reverseTweets(tweets);
        }

        return [...tweets].reverse().slice(start, end);
    }

    getTweetByUser() {
        console.log(this.username)
        return tweets.filter(t => t.username === this.username);
    }
}