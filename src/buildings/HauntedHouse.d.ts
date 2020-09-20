export declare class HauntedHouse {
    name: string;
    location: string;
    causedBy: string;
    ghostDemeanor: string;
    ghostDesire: string;
    constructor(name: string, location?: any, causedBy?: any, ghostDemeanor?: any, ghostDesire?: any);
    generateLocation(): String;
    generateCause(): String;
    generateGhostDemeanor(): String;
    generateGhostDesire(): String;
}
export default HauntedHouse;
