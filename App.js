import { StyleSheet,} from 'react-native';
import { WebView } from 'react-native-webview';
import { LogLevel, OneSignal } from 'react-native-onesignal';




export default function App() {
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize('ce015518-7f7e-4e34-bb69-15f84dd6dcb4');
  OneSignal.Notifications.requestPermission(true);
  
  return (
    <WebView 
      style={styles.webView}
      source={{ uri: 'https://www.norocosulcastigator.com/' }}
      />
  );
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
    marginTop: 52,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
