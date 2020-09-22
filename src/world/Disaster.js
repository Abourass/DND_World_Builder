import chooseRandomlyFrom from '../lib/random.js';
export class Disaster {
    constructor(cause = null, catastrophe = null, scale = null, communityResponse = null) {
        this.cause = (cause === null) ? this.generateCause() : cause;
        this.catastrophe = (catastrophe === null) ? this.generateCatastrophe() : catastrophe;
        this.scale = (scale === null) ? this.generateScale() : scale;
        this.communityResponse = (communityResponse === null) ? this.generateCommunityResponse() : communityResponse;
    }
    generateCause() {
        const random = 'Random accident has conspired against the community. No one in particular is responsible.';
        const causes = [
            random, random, random, random,
            "The Gods themselves have been offended. A Sacrifice was not made, a sacred animal or a priest was murdered, or someone has committed some other terrible transgression. Further recompense may be necessary.",
            "A dark ritual or curse is targeting the community. The calamity may the goal or merely a side-effect. This may only be a prelude.",
            "A prophecy has come to pass. It was written in the ancient scrolls, and you were fools to have ignored them."
        ];
        if (Math.floor(Math.random() * 9) === 8) {
            const firstCause = Math.floor(Math.random() * causes.length);
            let secondCause = Math.floor(Math.random() * causes.length);
            while (causes[firstCause] === causes[secondCause]) {
                secondCause = Math.floor(Math.random() * causes.length);
            }
            return `${causes[firstCause]} and ${causes[secondCause]}`;
        }
        return chooseRandomlyFrom(causes);
    }
    generateCatastrophe() {
        const uhOhs = [
            "An invasion, whether in the form of bandits, a foreign foe or even something as pedestrian as locusts or weevils.",
            "Plague, deadly enough that healing magic has no means to arrest it.",
            "A natural disaster, such as an earthquake, tsunami or volcanic eruption.",
            "Climate related disaster, such as an unusually long and intense rainy season, or a parching drought.",
            "A weather related event, such as a tornado, hurricane or wild fire.",
            "An explicitly magical event, such as a sourceless tune which forces listeners to dance or the dead beginning to rise from their graves.",
            "Blight and pestilence. It leads to the the death of any crops and livestock which are afflicted.",
            "A bizarre event, such as a rain of frogs or the waters within a river or lake turning to blood."
        ];
        return chooseRandomlyFrom(uhOhs);
    }
    generateScale() {
        const scales = [
            'Only a few families, or perhaps a couple of buildings.',
            'The equivalent of a small town or village.',
            'The equivalent of a small town or village.',
            'A city, or several villages or towns.',
            'A city, or several villages or towns.',
            'An entire region or province.',
            'An entire region or province.',
            'The entirety of a country, empire or kingdom.'
        ];
        return chooseRandomlyFrom(scales);
    }
    generateCommunityResponse() {
        const responses = [
            'Nonchalance. This event is a regular occurrence, to the point where most folk pay it no mind.',
            'A doomsayer has appeared, promising to solve what vexes the community if they merely commit a few unspeakable acts. People are listening.',
            'Mild panic. There are runs on stores, hoarding and small bouts of interpersonal violence, but no breakdown in law and order.',
            'Mild panic. There are runs on stores, hoarding and small bouts of interpersonal violence, but no breakdown in law and order.',
            'Severe panic. Looting, burning, combat in the streets.',
            'Open revolution. The followers are blaming the leaders, and are planning on holding them responsible through violent means.',
            'Mass exodus. Everyone flees the area as fear seizes them.',
            'Resignation and apathy have overtaken them. The disaster seems inevitable, so they no longer see the point in struggling.'
        ];
        return chooseRandomlyFrom(responses);
    }
}
export default Disaster;
//# sourceMappingURL=Disaster.js.map