export const checkDepth = (target) => {
    if (document.querySelector(target).childNodes.length === 3) {
        const targetComponents = target.split('-');
        return checkDepth(`${targetComponents[0]}-${(parseInt(targetComponents[1], 10) + 1)}`);
    }
    return target;
};
export default checkDepth;
//# sourceMappingURL=checkDepth.js.map