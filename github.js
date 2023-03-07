class GitHub {
    constructor() {
        this.client_id = "a816f1ab0e501c241922";
        this.client_secret = "ea85c12aac81851f26f788ff5e8ac2f7600b61c5";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user){
        const profileResponse  = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse  = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos 
        }
    }




}