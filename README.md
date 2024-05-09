## WhatsApp Authentication Voxel

This repository contains a project for implementing WhatsApp authentication using a Node.js backend and React frontend.

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/avezqureshi14/whatsapp-auth-voxel
   ```

2. **Install dependencies for both client and server:**

   ```bash
   cd whatsapp-auth-voxel/client
   npm install
   cd ../server
   npm install
   ```

3. **Start the client:**

   ```bash
   cd ../client
   npm start
   ```

4. **Run the server:**

   ```bash
   cd ../server
   node index.js
   ```

### Usage

1. After running the server, a QR code will be displayed.
2. Scan this QR code using WhatsApp on your phone.
3. On the client side (web app), you can enter a phone number to receive an OTP.
4. Enter the received OTP to verify.

![QR Code](https://github.com/avezqureshi14/whatsapp-auth-voxel/assets/95353195/7bac1e7c-5b2d-4dfc-919a-83a953c1a428)
