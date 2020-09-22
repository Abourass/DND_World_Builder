export declare class Weapon {
    type: string;
    look: string;
    unique: string;
    history: string;
    constructor(type?: any, look?: any, unique?: any, history?: any);
    generateType(): String;
    generateLook(): String;
    generateUnique(): String;
    generateHistory(): String;
}
export default Weapon;
