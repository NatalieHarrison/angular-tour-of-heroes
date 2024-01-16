import { City } from "./city";
import { Power } from "./power";
export interface Hero {
    id: number;
    name: string;
    city : City; 
    powers: Power[];
}