import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { transactionService } from '../services/api';

const ScanScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    try {
      // Dans une application réelle, les données scannées contiendraient un QR code ID ou une référence.
      // On ferait un appel API pour valider la transaction.
      Alert.alert(
        'Scan réussi !',
        `QR Code scanné : ${data}`,
        [{ text: 'OK', onPress: () => setScanned(false) }]
      );
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de traiter la transaction');
      setScanned(false);
    }
  };

  if (hasPermission === null) {
    return <Text>Demande d'autorisation de caméra...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Pas d'accès à la caméra.</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Appuyez pour scanner à nouveau'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});

export default ScanScreen;
