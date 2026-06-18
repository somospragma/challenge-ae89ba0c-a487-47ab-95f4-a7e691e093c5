const { Worker } = require('worker_threads');
const { handleError } = require('../utils/errorHandler');

test('processTransaction should process transactions correctly', (done) => {
  const worker = new Worker(__dirname + '/../workers/transactionWorker.js');
  worker.postMessage({ id: 1, amount: 100 });
  worker.on('message', (result) => {
    expect(result.status).toBe('success');
    done();
  });
  worker.on('error', (error) => {
    handleError(error);
    done(error);
  });
});