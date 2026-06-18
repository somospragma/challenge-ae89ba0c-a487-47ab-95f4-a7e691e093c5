const { parentPort } = require('worker_threads');

async function processTransaction(transaction) {
  try {
    console.log(`Processing transaction ${transaction.id} with amount ${transaction.amount}`);
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Transaction ${transaction.id} processed`);
    parentPort.postMessage({ status: 'success', transaction });
  } catch (error) {
    parentPort.postMessage({ status: 'error', error });
  }
}

parentPort.on('message', async (transaction) => {
  await processTransaction(transaction);
});