export interface Animal {
  id: string;
  name: string;
  type: string;
}

export interface PetfinderResponse {
  animals: Animal[];
}
