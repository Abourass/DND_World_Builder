export declare class Academy {
    name: string;
    type: string;
    studentBody: string;
    reputation: string;
    unique: string;
    constructor(name: string, type?: any, studentBody?: any, reputation?: any, unique?: any);
    generateType(): String;
    generateStudentBody(): String;
    generateReputation(): String;
    generateUniqueness(): String;
}
export default Academy;
