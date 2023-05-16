import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './src/screens/Homepage';
import EmployeeDetails from './src/screens/EmployeeProfile';
import LoginPage from './src/screens/LoginPage';
import EmployeeLookup from './src/screens/EmployeeLookup';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={Homepage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Lookup"
          component={EmployeeLookup}
          options={{
            title: 'Lookup',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Profile" component={EmployeeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
