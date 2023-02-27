export default class Service {

    getAvatar(usuarios, username) {
        const avatar = usuarios.find(user => user.username === username);
        return avatar;
    }
}

export function reverseTweets(tweets) {
    return [...tweets].reverse();
}