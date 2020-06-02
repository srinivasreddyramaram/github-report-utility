import { Repo } from "./Repo";

export class User {
    login: string;
    repoCount: number;
    followerCount: number;
    repos: Repo[];

    constructor(userResponseBody: any) {
        this.login = userResponseBody.login;
        this.repoCount = userResponseBody.public_repos;
        this.followerCount = userResponseBody.followers;
        //this.repos = userResponseBody.repos;
    }
}
