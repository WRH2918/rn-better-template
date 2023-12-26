import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../HomePage';
import {RootStackParamList} from '../../types/routers.type';

const Tab = createBottomTabNavigator<RootStackParamList>();
const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen component={HomePage} name="HomePage" />
    </Tab.Navigator>
  );
};

export default HomeTab;
