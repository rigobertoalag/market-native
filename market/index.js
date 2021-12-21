import { View, Text, Button } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function MarketHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeTest" component={HomeScreen} />
        </Stack.Navigator>
    );
}