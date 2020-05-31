import { Repo } from "./Repo";

export class User {
    login: string;
    repoCount: number;
    followerCount: number;
    repos: Repo[];
}