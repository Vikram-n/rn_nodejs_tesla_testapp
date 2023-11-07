import { Text, View , StyleSheet , Pressable ,} from 'react-native';
import { Link } from 'expo-router';

import {MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';




const MenuOption = ({ item }) => {
    return (
      <Link href={item.href} asChild >
      <Pressable style={styles.optionrow}>
        {/*icons */}
        <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
  
        {/*text */}
        <Text style={styles.optiontext}>{item.name}</Text >
  
        {/*icon */}
        <MaterialIcons name="keyboard-arrow-right" size={30} color="gray" style={{ marginLeft: 'auto' }}/>
          
        </Pressable>
      </Link>
    )
  }

  export default MenuOption;

  const styles = StyleSheet.create({
    optionrow:{
      flexDirection: 'row',
      marginVertical: 20,
      alignItems: 'center',
    },
    optiontext:{
      color: '#eee',
      fontSize: 19,
      fontWeight: 'bold',
      marginLeft: 10,
    }
  });
  