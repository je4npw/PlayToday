import React, { useState } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../compontents/ButtonIcon';
export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Lista de{`\n`}
          Compras
        </Text>
        <Text style={styles.subtitle}>
          Organize suas compras {`\n`}
          por datas em grupo
        </Text>
        <ButtonIcon
          title='Entrar com Gmail'
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}
