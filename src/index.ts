import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./Repo";

let gitHubService = new GithubApiService();
gitHubService.getUserInfo('srinivasreddyramaram', (user: User) => {
    console.log(user);
});
gitHubService.getRepos('srinivasreddyramaram', (repos: Repo[]) => {
    console.log(repos);
});