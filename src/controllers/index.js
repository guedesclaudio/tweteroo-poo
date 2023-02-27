import { User } from "../repositories/index.js";
import { Tweet } from "../repositories/index.js";

export function signUp(req, res) {
    const { username, avatar } = req.body;
    const user = new User(username, avatar);

    if (!username || !avatar) {
        return res.status(400).send('Todos os campos são obrigatórios!');
    }
    
    try {
        user.postUser();
        return res.status(200).send('OK deu tudo certo');
    } catch (error) {
        return res.sendStatus(500);
    }
}

export function postTweet(req, res) {
    const { tweet, username } = req.body;
    const tweetClass = new Tweet(username, tweet, null);
  
    if (!username || !tweet) {
      return res.status(400).send('Todos os campos são obrigatórios!');
    }

    try {
        tweetClass.post();
        return res.status(201).send('OK, seu tweet foi criado');
    } catch (error) {
        return res.sendStatus(500);
    }
}

export function getTweet(req, res) {
    const { username } = req.params;
    const tweetClass = new Tweet(username, null, null);


    try {
        const tweets = tweetClass.getTweetByUser();
        return res.status(200).send(tweets);
    } catch (error) {
        return res.sendStatus(500);
    }  
}

export function listTweets(req, res) {
    let { page } = req.query;

    if (page && page < 1) {
        return res.status(400).send('Informe uma página válida!');
    }
    if (!page) {
        page = 0;
    }

    const tweetClass = new Tweet(null, null, page);

    try {
        const tweets = tweetClass.list();
        return res.status(200).send(tweets);
    } catch (error) {
        return res.sendStatus(500);
    }
}