export class Serie {
  /////////////////////////
  //      ATRIBUTOS
  /////////////////////////
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  poster: string;


  /////////////////////////
  //      CONSTRUCTORES
  /////////////////////////
  constructor (
        id: number,
        name: string,
        channel: string,
        seasons: number,
        description: string,
        webpage: string,
        poster: string
    ) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.webpage = webpage;
      this.poster = poster;
    }
}
