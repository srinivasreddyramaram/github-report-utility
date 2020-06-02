import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./Repo";
import * as _ from 'lodash';

let gitHubService = new GithubApiService();
if (process.argv.length < 3) {
    console.log('Please pass the username as argument');
} else {
    let userName = process.argv[2]; //read from the command-line arguments
    gitHubService.getUserInfo(userName, (user: User) => {
        gitHubService.getRepos(userName, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
            let filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}



