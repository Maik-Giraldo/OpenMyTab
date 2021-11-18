import { Location } from "src/app/shared/models/get-characters-res";


export class Character{
    constructor(){
        this.name = "";
        this.status = "";
        this.image = "";
        this.gender = "";
        this.species = "";
        this.location = {
            name : "",
            url : ""
        };
    }
    
    name : string;
    status : string;
    image : string;
    gender : string;
    species : string;
    location : Location;
}