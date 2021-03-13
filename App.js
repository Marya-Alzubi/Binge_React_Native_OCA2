import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { useFonts as useInterFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useFonts as useOswaldFonts, Oswald_600SemiBold } from '@expo-google-fonts/oswald';
import { useFonts as usebangersFonts , Bangers_400Regular } from '@expo-google-fonts/bangers';
import Navigation from './Navigation';

export default () => {
  let [bangersFontsLoaded] = usebangersFonts({
    Bangers_400Regular
  });
  let [interFontsLoaded] = useInterFonts({
    Inter_400Regular, Inter_600SemiBold
  });

  let [oswaldFontsLoaded] = useOswaldFonts({
    Oswald_600SemiBold
  });

  if (!interFontsLoaded || !oswaldFontsLoaded || !bangersFontsLoaded)
    return <AppLoading />;
  else
    return (
      <>
        <StatusBar translucent={false} style='light' />
        <Navigation />
      </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
