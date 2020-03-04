export class Movie {
    constructor(
        public id: string,
        public title: string,
        public poster?: string,
        public score?: string,
        public director?: string,
        public description?: string,
        public actors?: string[],
    ) { }
}