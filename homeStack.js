import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './components/home';
import Detail from './components/detail';
import Add from './components/add';

const screens = {
    Home:{
        screen:Home
    },
    Detail:{
        screen:Detail
    },
    Add:{
        screen:Add
    }
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);