export declare class Bounty {
    name: string;
    worth: string;
    crime: string;
    whereabouts: string;
    unique: string;
    constructor(name: string, worth?: any, crime?: any, whereabouts?: any, unique?: any);
    generateWorth(): String;
    generateCrime(): String;
    generateWhereabouts(): String;
    generateUnique(): String;
}
export default Bounty;
