/* bugSolution.js */
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    getInitialUrl();
  }, []);

  useEffect(() => {
    if (initialUrl) {
      // Handle initial URL
      console.log('Initial URL:', initialUrl);
    }
  }, [initialUrl]);

  return (
    <View>
     {/* Your app content */}
    </View>
  );
}
