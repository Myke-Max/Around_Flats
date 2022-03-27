interface FirebaseConfig {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: 'AIzaSyCEOklAB3zaJTte1C6xEty4wpdpwB-TGvM',
  authDomain: 'voypostapp-53459.firebaseapp.com',
  projectId: 'voypostapp-53459',
  storageBucket: 'voypostapp-53459.appspot.com',
  messagingSenderId: '807673757450',
  appId: '1:807673757450:web:4e019179a7e992140144f3',
};

// const firebaseConfig: FirebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// };

export default firebaseConfig;
