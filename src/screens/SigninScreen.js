import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SigninScreen = ({navigation}) => {

  const {state, signin, clearErrorMessage} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage}/>
      <AuthForm headerText="Sign In to Your Account" errorMessage={state.errorMessage}
                submitButtonText="Sign In" onSubmit={signin}/>

      <NavLink routeName={'Signup'} text={"Dont have account? Sign up instead"}/>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SigninScreen;