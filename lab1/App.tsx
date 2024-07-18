import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Banner from './Components/Banner';
import Block from './Components/Block';
import Button from './Components/Button';
import CustomTextInput from './Components/CustomTextInput';
import ThemeSwitch from './Components/ThemeSwitch';


const RegistrationScreen = () => (
  <View style={styles.container}>
    <Image source={require('./assets/images/logo_fpt.png')} style={styles.logo} />
    <Block title="Thông tin cá nhân" backgroundColor="#FFFFFF"> 
      <CustomTextInput placeholder="Nhập thông tin cá nhân" />
    </Block>
    <Block title="Thông tin khóa học" backgroundColor="#FFFFFF">
      <CustomTextInput placeholder="Nhập thông tin khóa học" />
    </Block>
    <Block title="Thông tin liên hệ" backgroundColor="#FFFFFF">
      <CustomTextInput placeholder="Nhập thông tin liên hệ" />
    </Block>
    <Button title="Đăng ký" onPress={() => console.log('Đăng ký pressed')} backgroundColor="#2196F3" />
    <ThemeSwitch onPress={() => console.log('Switch theme')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 295,
    height: 100,
    marginBottom: 20,
  },
});

export default RegistrationScreen;