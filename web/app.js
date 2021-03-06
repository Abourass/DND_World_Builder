import academyButton from './buttons/academyButton.js';
import prisonButton from './buttons/prisonButton.js';
import hauntedHouseButton from './buttons/hauntedHouseButton.js';
import bountyButton from './buttons/bountyButton.js';
import contestButton from './buttons/contestButton.js';
import heistButton from './buttons/heistButton.js';
import festivusButton from './buttons/festivusButton.js';
import Style from './tools/style.js';
import weaponButton from './buttons/weaponButton.js';
import disasterButton from './buttons/disasterButton.js';
const theme = new Style(`
.justify-center {
  display: flex;
  justify-content: center;
}
`);
prisonButton();
academyButton();
hauntedHouseButton();
bountyButton();
contestButton();
heistButton();
festivusButton(theme);
weaponButton(theme);
disasterButton();
//# sourceMappingURL=app.js.map