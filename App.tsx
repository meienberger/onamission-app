/* eslint-disable import/no-unused-modules */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'react-native-picasso';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './src/core/theme';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App(): JSX.Element | null {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
