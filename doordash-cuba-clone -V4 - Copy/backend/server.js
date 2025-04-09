import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import admin from 'firebase-admin';
import fs from 'fs';

// Read the Firebase service account key file
const serviceAccount = JSON.parse(fs.readFileSync('./backend/firebaseServiceAccountKey.json', 'utf8'));

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/api/orders', async (req, res) => {
  const orderDetails = req.body;

  try {
    // Save order to Firestore
    const orderRef = await db.collection('orders').add(orderDetails);
    console.log('Order saved with ID:', orderRef.id);

    res.status(201).json({
      message: 'Order received successfully',
      orderId: orderRef.id,
    });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Failed to save order', error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});