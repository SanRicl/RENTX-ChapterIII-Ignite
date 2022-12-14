import 'dotenv/config';
import { createConnection, Connection, getConnectionManager } from 'typeorm';

const connection = async () => {
  const connectionManager = getConnectionManager();
  const CONNECTION_NAME = 'default';
  let connection: Connection;

  if (connectionManager.has(CONNECTION_NAME)) {
    connection = connectionManager.get(CONNECTION_NAME);

    if (!connection.isConnected) {
      connection = await connection.connect();
    }
  } else {
    await createConnection({
      type: 'postgres',
      url: process.env.DATABASE_URL_PROD,
      entities: ['./src/modules/**/entities/*.ts'],
    });
  }
};

export default connection;
