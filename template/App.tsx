import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootRouters from './src/routers';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <RootRouters />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
