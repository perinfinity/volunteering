
import { UUID } from "crypto";



export class User{
    public id! : UUID;

    public userName! : string;

    public password! : string;

    public confirmPassword! : string;

    public email! : string;

    public role! : string ;

    public firstName! : string;

    public lastName! : string;

    public org_name! : string ;

    public bio! : string;

    public address! : string ;

    public phone! : string;

    public created_at! : string ;

    public updated_at! : string;

}