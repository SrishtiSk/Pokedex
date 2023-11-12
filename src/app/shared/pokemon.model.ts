export class Pokemon {
    constructor(
      // From pokemon
      public id: number,
      public name: string,
      public height: any,
      public weight: any,
      //public sprite:any, // no
      public is_default: any,
      public types: any,
      public baseExperience: any,
      public abilities: any,
      // public forms, // no
      public heldItems: any,
      // public gameIndices, // no
      // public location, // no
      public moves: any,
      // public order, // no
      public stats: any,
      public species: any,
      // From pokemon-species
      public speciesDetails: any,
      public color: any,
      public genera: any,
      public varieties: any,
      public evolutionChainID: any
    ) {
    }
  }