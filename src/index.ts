import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./Repo";
import * as _ from 'lodash';

let gitHubService = new GithubApiService();
gitHubService.getUserInfo('srinivasreddyramaram', (user: User) => {
    //console.log(user);
    gitHubService.getRepos('srinivasreddyramaram', (repos: Repo[]) => {
        //console.log(repos);
        let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
        let filteredRepos = _.take(sortedRepos, 5);
        user.repos = filteredRepos;
        console.log(user);
    });
});

