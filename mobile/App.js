import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import DashboardScreen from './src/screens/DashboardScreen';
import ScanScreen from './src/screens/ScanScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Dashboard');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {currentScreen === 'Dashboard' ? <DashboardScreen /> : <ScanScreen />}
      </View>
      
      {/* Barre de Navigation simple */}
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={[styles.navItem, currentScreen === 'Dashboard' && styles.activeNav]}
          onPress={() => setCurrentScreen('Dashboard')}
        >
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, currentScreen === 'Scan' && styles.activeNav]}
          onPress={() => setCurrentScreen('Scan')}
        >
          <Text style={styles.navText}>Scanner QR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    height: 60,
    backgroundColor: '#fff',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeNav: {
    borderTopWidth: 2,
    borderTopColor: '#007bff',
  },
  navText: {
    fontSize: 14,
    color: '#495057',
  },
});
