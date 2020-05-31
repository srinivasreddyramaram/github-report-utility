"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var gitHubService = new GithubApiService_1.GithubApiService();
gitHubService.getUserInfo('srinivasreddyramaram');
gitHubService.getRepos('srinivasreddyramaram');
