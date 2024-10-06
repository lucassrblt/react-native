import {Tabs} from 'expo-router';
import {House, ShoppingBasket, User} from 'lucide-react-native'

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index"
                         options={{
                             title: "Home",
                             tabBarIcon: ({color, focused}) => (
                                 <House color={focused ? '#ec4e37' : '#D3D3D3'} size={26}/>
                             )
                         }}/>
            <Tabs.Screen name="produits"
                         options={{
                             title: "Produits",
                             tabBarIcon: ({color, focused}) => (
                                 <ShoppingBasket color={focused ? '#ec4e37' : '#D3D3D3'} size={26}/>
                             ),
                         }}/>

            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({color, focused}) => (
                    <User color={focused ? '#ec4e37' : '#D3D3D3'} size={26}/>
                )
            }}/>
        </Tabs>
    );
}
