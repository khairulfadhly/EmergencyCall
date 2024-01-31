import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'EmergencyCall',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  },
  // plugins: {
  //   GoogleMaps: {
  //     apiKey: 'AIzaSyB87O0r9if0szz5yzcFBz80lKh8aSbYH3E'
  //   }
  // }
};

export default config;