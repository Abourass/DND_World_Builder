export declare class HauntedHouse {
    location: string;
    causedBy: string;
    ghostDemeanor: string;
    ghostDesire: string;
    constructor(location?: any, causedBy?: any, ghostDemeanor?: any, ghostDesire?: any);
    generateLocation(): String;
    generateCause(): String;
    generateGhostDemeanor(): String;
    generateGhostDesire(): String;
}
export default HauntedHouse;
