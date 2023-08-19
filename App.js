import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from './constants/theme'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreeen from './screens/HomeScreen'
import FavoriteScreen from './screens/FavoriteScreen'
import SearchScreen from './screens/SearchScreen'
import CartScreen from './screens/CartScreen'
import ProfileScreen from './screens/ProfileScreen'
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductbyCategoryScreen from './screens/ProductbyCategoryScreen'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'light': require('./assets/fonts/Poppins-Light.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style='dark' />
      <Provider store={store}>
        <Root />
      </Provider>
    </>
  );
}

function Root() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   (async () => {
  //     const token = await AsyncStorage.getItem('token')
  //     if (token) {
  //       dispatch(authenticate(token))
  //     }
  //   })()
  // }, [])

  return <Navigation />
}

function Navigation() {
  // const authenticatedUser = useSelector(state => state.auth.isAuthenticated)

  return (
    <NavigationContainer>
      {/* {!authenticatedUser && <AuthStack />}
      {authenticatedUser && <AuthenticatedStack />} */}
      <AuthenticatedStack />
    </NavigationContainer>
  );
}

function AuthenticatedStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='BottomTabNavigator'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Product'
        component={ProductbyCategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ProductDetail'
        component={ProductDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (

    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      headerShown: false
    }}>
      <Tab.Screen
        name='Home'
        component={HomeScreeen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={focused ? COLORS.primary : 'gray'}
              size={24}
            />
          )
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline'}
              color={focused ? COLORS.primary : 'gray'}
              size={24}
            />
          )
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              color={focused ? COLORS.primary : 'gray'}
              size={24}
            />
          )
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              color={focused ? COLORS.primary : 'gray'}
              size={24}
            />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              color={focused ? COLORS.primary : 'gray'}
              size={24}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}


