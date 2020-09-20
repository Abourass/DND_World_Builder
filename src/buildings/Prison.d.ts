export declare class Prison {
    name: string;
    type: string;
    convicts: string;
    guards: string;
    help: string;
    constructor(name: string, type?: any, convicts?: any, guards?: any, help?: any);
    generateType(): String;
    generateConvicts(): String;
    generateGuards(): String;
    generateHelp(): String;
}
export default Prison;
