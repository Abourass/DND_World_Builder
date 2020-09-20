export declare class Festivus {
    name: string;
    type: string;
    observance: string;
    proceedings: string;
    lengthOfTime: string;
    constructor(name: string, type?: any, observance?: any, proceedings?: any, lengthOfTime?: any);
    generateType(): String;
    generateObservance(): String;
    generateProceedings(): String;
    generateLength(): String;
}
export default Festivus;
