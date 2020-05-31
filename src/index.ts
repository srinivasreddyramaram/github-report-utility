import { GithubApiService } from "./GithubApiService";

let gitHubService = new GithubApiService();
gitHubService.getUserInfo('srinivasreddyramaram');
gitHubService.getRepos('srinivasreddyramaram');