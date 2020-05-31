import * as request from 'request';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request' //don't care what the value is
    }
}
export class GithubApiService {
    getUserInfo(userName: string) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, (error: any, response: any, body: any) => {
            console.log(body);
        });
    }

    getRepos(userName: string) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
            console.log(body);
        });
    }
}