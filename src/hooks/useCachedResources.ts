import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import init from '../core/init';

const spaceMonoFont = require('../../assets/fonts/SpaceMono-Regular.ttf');
const sofiaProFont = require('../../assets/fonts/SofiaPro.ttf');

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Misc init
        await init();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': spaceMonoFont,
          SofiaPro: sofiaProFont,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
