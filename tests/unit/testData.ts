export const fakeSubmitForm = {
  configs: {
    accessKeyId: 'testKey',
    secretAccessKey: 'testSecretKey',
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    maxRetries: 2,
    dynamoDbCrc32: false,
  },
  name: 'Database 1',
  color: '#00f97c',
  createdAt: +new Date(),
};

export const duplicateDbName = {
  configs: {
    accessKeyId: 'testKey2',
    secretAccessKey: 'testSecretKey2',
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    maxRetries: 2,
    dynamoDbCrc32: false,
  },
  name: 'Database 1',
  color: '#00f97c',
  createdAt: +new Date(),
};

export const wrongSubmitForm = {
  configs: {
    accessKeyId: 'testKey',
    secretAccessKey: 'testSecretKey',
    region: 'localhost',
    endpoint: 'wrongEndpoint',
    maxRetries: 2,
    dynamoDbCrc32: false,
  },
  name: 'Database 1',
  color: '#00f97c',
  createdAt: +new Date(),
};

export const emptySubmitForm = {
  configs: {
    accessKeyId: '',
    secretAccessKey: '',
    region: 'es-west',
    endpoint: 'http://localhost',
    maxRetries: 2,
    dynamoDbCrc32: false,
  },
  name: 'Database 1',
  color: '#00f97c',
  createdAt: +new Date(),
};
