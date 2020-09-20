export declare class Contest {
    name: string;
    type: string;
    regarded: string;
    stakes: string;
    unique: string;
    constructor(name: string, type?: any, regarded?: any, stakes?: any, unique?: any);
    generateType(): String;
    generateRegard(): String;
    generateStakes(): String;
    generateUnique(): String;
}
export default Contest;
