import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import 'react-native-gesture-handler';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import Homescreen from './HomeScreen';
import LoginScreen from './Login';
import Services_Add from './Services';

const Stack = createStackNavigator();
// funtion LoginScreen() {
//     return(
//         <Tab.Navigator
//         initialRouteName="LoginScreen"
//         ScreenOptions={
//             headerShown:true
//         }
//         >
//         </Tab.Navigator>
//     )
//     };
function LoginScreens() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato' }}
        >
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            
            />
             <Stack.Screen
                name="HomeScreen"
                component={MyTabs}
                
            />
            
        </Stack.Navigator>
    )
}
function HomeScreen_Run(){
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato' }}
            screenOptions={{
                headerShown: false
            }}
>
            <Stack.Screen 
            name="Home"
            component={Homescreen}
            />
            <Stack.Screen
            name="Services"
            component={Services_Add}/>

        </Stack.Navigator>
    )
}


const Tab = createMaterialBottomTabNavigator();
function MyTabs(){
    return (
        <Tab.Navigator
        initialRouteName='HomeScreen_Run'
         barStyle= {{backgroundColor : "blue"}}
        // labeled={false}
        // activeTintColor={"greyLight"}
        // inactiveColor={"greyDark"}
        >
        <Tab.Screen name ="Home"
         component={HomeScreen_Run}
         options={{
            tabBarIcon: 'format-list-bulleted',
         }}
/>
<Tab.Screen
name="Transaction"
component={Services_Add}
/>
<Tab.Screen
name="Customer"
component={Homescreen}
/>
<Tab.Screen
name="Setting"
component={Homescreen}
/>
        </Tab.Navigator>
    )
}
 const App_run =()=> {
    return (
        <NavigationContainer>
            <LoginScreens/>
        </NavigationContainer>
    );
}
export default App_run;