import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Colors } from '../../themes/Colors';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor:Colors.mainBlue ,  tabBarInactiveTintColor: 'gray',

      
       
        headerTitle: "",
        headerShown:false,}}>
      <Tabs.Screen
        name="index"
        options={{
         
          title: 'Home',
          tabBarIcon: ({color}) =><FontAwesome size={24} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="SearchCategoryScreen"
        options={{
          title: 'Search',
          tabBarIcon: ({color}) => <FontAwesome size={24} name="search" color={color} />,
        }}
      />

<Tabs.Screen
        name="ProfileScreen"
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) =><Image source={require('../../Images/profilePhoto.png')} style={{borderColor:color,borderWidth:2,borderRadius:40,height:24,width:24,  }}/>,
        }}
      />
    </Tabs>
  );
}