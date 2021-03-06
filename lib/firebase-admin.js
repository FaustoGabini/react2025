import admin from "firebase-admin";

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email:
        process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      private_key:
        process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY.replace(
          /\\n/g,
          "\n"
        ),
      project_id:
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL:
      "https://fastfeedback-react.firebaseio.com",
  });
}

export default admin.firestore();
