export class Pokemon {
    // constructor(
    //   // From pokemon
    //   public id: number,
    //   public name: string,
    //   public height: any,
    //   public weight: any,
    //   //public sprite:any, // no
    //   public is_default: any,
    //   public types: any,
    //   public baseExperience: any,
    //   public abilities: any,
    //   // public forms, // no
    //   public heldItems: any,
    //   // public gameIndices, // no
    //   // public location, // no
    //   public moves: any,
    //   // public order, // no
    //   public stats: any,
    //   public species: any,
    //   // From pokemon-species
    //   public speciesDetails: any,
    //   public color: any,
    //   public genera: any,
    //   public varieties: any,
    //   public evolutionChainID: any
    // ) {
    // }
    id!: number;
    order!: number;
    name!: string;
    height!: number;
    abilities: Ability[];
    spices!: SpeciesDetails;
    types: Type[];
    weight!: number;
   // sprites: Sprite;
    stats!: Stat[];
    froms!: Forms[];
    genus!: string;
    color!: string;

    constructor() {
        this.abilities  = [];
        this.types = [];
        this.genus = this.genus;
    }
}

class Ability  {
  ability!: {
    name: string;
  };
  constructor() {
  }
}

class Type {
  slot!: number;
  type!: {
    name: string;
  };
}

class Sprite {
  front_default!: string;
}

class Stat {
  base_stat!: number;
  stat!: {
    name: string;
  };
}
class Forms{
}

export class SpeciesDetails{
  genus!:string;
  genera!:any;
  color!:any;
  
  constructor(){
  }
}