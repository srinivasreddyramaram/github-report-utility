export class Repo {
    name: string;
    description: string;
    url: string;
    size: number;
    forkCount: number;

    constructor(userResponseBody: any) {
        this.name = userResponseBody.name;
        this.description = userResponseBody.description;
        this.url = userResponseBody.url;
        this.size = userResponseBody.size;
        this.forkCount = userResponseBody.forks_count;
    }
}
