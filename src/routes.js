import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/index';

const Routes = createAppContainer(createSwitchNavigator({Main}));

export default Routes;
