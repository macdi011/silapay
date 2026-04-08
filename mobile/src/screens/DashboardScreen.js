import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { transactionService } from '../services/api';
import Card from '../components/Card';

const DashboardScreen = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await transactionService.getTransactions();
      setTransactions(response.data.data);
    } catch (error) {
      console.error('Erreur lors du chargement des transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderTransaction = ({ item }) => (
    <Card style={styles.transactionCard}>
      <View style={styles.transactionInfo}>
        <Text style={styles.amount}>{item.montant} GNF</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <Text style={styles.date}>{new Date(item.date).toLocaleDateString()}</Text>
      <Text style={styles.user}>Utilisateur: {item.user_ID?.name}</Text>
    </Card>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes Transactions</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  transactionCard: {
    marginBottom: 15,
  },
  transactionInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
  },
  status: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#6c757d',
  },
  date: {
    color: '#6c757d',
    fontSize: 12,
  },
  user: {
    marginTop: 5,
    fontSize: 14,
    color: '#495057',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;
