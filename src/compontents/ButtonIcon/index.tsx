import React from 'react';
import {
  Text,
  Image,
  View,
  Touchable,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import GoogleImg from '../../assets/google-icon.png'
import { styles } from './styles';

type Props = TouchableOpacityProps & { title: string }
export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={GoogleImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}