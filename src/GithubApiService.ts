import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request' //don't care what the value is
    },
    json: true //request libraray returns response as string by default, we request for JSON directly
}
export class GithubApiService {
    getUserInfo(userName: string, cb: (user: User) => any) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, (error: any, response: any, body: any) => {
            //console.log(body);
            let user = new User(body);
            //console.log(user);
            cb(user);
        });
    }

    getRepos(userName: string, cb: (repoArray: Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
            //console.log(body);
            let repoArray = body.map((repo: any) => (new Repo(repo))); //map executes the function passed to it for each element of the array and returns a new array
            //console.log(repos);
            cb(repoArray);
        });
    }
}
