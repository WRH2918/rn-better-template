import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/routers.type';
import HomeTab from '../pages/HomeTab';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRouters = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={HomeTab}
          name="HomeTab"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootRouters;
