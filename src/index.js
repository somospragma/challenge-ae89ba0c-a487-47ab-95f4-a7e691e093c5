const { handleTransaction } = require('./workers/transactionWorker');
const { handleError } = require('./utils/errorHandler');

async function processTransactions(transactions) {
  try {
    for (const transaction of transactions) {
      await handleTransaction(transaction);
    }
  } catch (error) {
    handleError(error);
  }
}

// Simulate incoming transactions
const transactions = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 300 },
];

processTransactions(transactions);