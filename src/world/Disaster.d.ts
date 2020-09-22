export declare class Disaster {
    cause: string;
    catastrophe: string;
    scale: string;
    communityResponse: string;
    constructor(cause?: any, catastrophe?: any, scale?: any, communityResponse?: any);
    generateCause(): String;
    generateCatastrophe(): String;
    generateScale(): String;
    generateCommunityResponse(): String;
}
export default Disaster;
