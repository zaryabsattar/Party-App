import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/splash";
import WelcomeScreen from "./src/screens/welcome";
import RegisterScreen from "./src/screens/register";
import VerifyCodeScreen from "./src/screens/verifyCode";
import LoginScreen from "./src/screens/login";
import ForgotPasswordScreen from "./src/screens/forgotpassword";
import ForgotNewPasswordScreen from "./src/screens/forgotNewPassword";
import CreateScreen from "./src/screens/create";
import RecentScreen from "./src/secondScreens/recent";
import SearchScreen from "./src/secondScreens/search";
import NewPartyScreen from "./src/secondScreens/newParty";
import UserScreen from "./src/secondScreens/user";
import MessageScreen from "./src/secondScreens/msgs";
import ProfileScreen from "./src/secondScreens/profile";
import EditProfileScreen from "./src/secondScreens/editProfile";
import ChatMenuScreen from "./src/secondScreens/chatMenu";
import SubscriptionScreen from "./src/secondScreens/subscription";
import LanguageScreen from "./src/secondScreens/language";
import NotificationScreen from "./src/secondScreens/Notification";
import PartyNamesScreen from "./src/secondScreens/partyNames";
import CreatePartyScreen from "./src/secondScreens/createParty";
import LiveStreamScreen from "./src/secondScreens/liveStream";
import LiveNowScreen from "./src/secondScreens/liveNow";
import CurrentPartyScreen from "./src/secondScreens/currentParty";
import FriendsScreen from "./src/secondScreens/friends";
import SocialAppScreen from "./src/secondScreens/socialApp";
import RecentActivityScreen from "./src/secondScreens/recentActivity";
import FilterScreen from "./src/secondScreens/filter";
import BlockedPeopleScreen from "./src/secondScreens/block";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="VerifyCodeScreen" component={VerifyCodeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="ForgotNewPasswordScreen" component={ForgotNewPasswordScreen} />
        <Stack.Screen name="RecentScreen" component={RecentScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="NewPartyScreen" component={NewPartyScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="ChatMenuScreen" component={ChatMenuScreen} />
        <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="PartyNamesScreen" component={PartyNamesScreen} />
        <Stack.Screen name="CreatePartyScreen" component={CreatePartyScreen} />
        <Stack.Screen name="LiveStreamScreen" component={LiveStreamScreen} />
        <Stack.Screen name="LiveNowScreen" component={LiveNowScreen} />
        <Stack.Screen name="CurrentPartyScreen" component={CurrentPartyScreen} />
        <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
        <Stack.Screen name="SocialAppScreen" component={SocialAppScreen} />
        <Stack.Screen name="RecentActivityScreen" component={RecentActivityScreen} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="BlockedPeopleScreen" component={BlockedPeopleScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
