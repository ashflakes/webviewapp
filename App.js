import { StyleSheet,} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
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
