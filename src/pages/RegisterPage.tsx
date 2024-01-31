

// import React, { useState } from 'react';
// import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonToast, IonLoading } from '@ionic/react';
// import { Redirect, useHistory } from 'react-router';
// import { useAuth } from '../auth';
// import { auth, firestore } from '../firebase';
// import './Home.css';

// const RegisterPage: React.FC = () => {
//   const { loggedIn } = useAuth();
//   const history = useHistory();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [nama, setNama] = useState('');
//   const [username, setUsername] = useState('');
//   const [telpon, setTelpon] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [showToast, setShowToast] = useState(false);
//   const [showLoading, setShowLoading] = useState(false);

//   const handleRegister = async () => {
//     try {
//       if (nama.trim() === '' || username.trim() === '' || telpon.trim() === '') {
//         throw new Error('Nama, username, dan nomor telepon harus diisi');
//       }

//       setShowLoading(true);
//       const credential = await auth.createUserWithEmailAndPassword(email, password);

//       const user = {
//         email: email,
//         nama: nama,
//         username: username,
//         telpon: telpon,
//         // Tambahkan data pengguna lain yang diinginkan
//       };

//       await firestore.collection('users').doc(credential.user?.uid).set(user);

//       console.log('credential:', credential);
//       setEmail('');
//       setPassword('');
//       setNama('');
//       setUsername('');
//       setTelpon('');
//       setShowToast(true);
//       setShowLoading(false);

//       // Arahkan pengguna ke halaman login setelah pendaftaran
//       history.replace('/login');
//     } catch (error: any) {
//       setErrorMessage(error.message);
//       setShowToast(true);
//       setShowLoading(false);
//       if (error.code === 'auth/invalid-email') {
//         setErrorMessage('Email tidak sesuai');
//       }
//     }
//   };

//   if (loggedIn) {
//     return <Redirect to="/my/home" />;
//   }


//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Register</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent className="ion-padding">
//         <form>
//           <IonInput
//             type="email"
//             placeholder="Email"
//             value={email}
//             onIonChange={(event) => setEmail(event.detail.value!)}
//             required
//           ></IonInput>
//           <IonInput
//             type="password"
//             placeholder="Password"
//             value={password}
//             onIonChange={(event) => setPassword(event.detail.value!)}
//             required
//           ></IonInput>
//           <IonInput
//             type="text"
//             placeholder="Nama"
//             value={nama}
//             onIonChange={(event) => setNama(event.detail.value!)}
//             required
//           ></IonInput>
//           <IonInput
//             type="text"
//             placeholder="Username"
//             value={username}
//             onIonChange={(event) => setUsername(event.detail.value!)}
//             required
//           ></IonInput>
//           <IonInput
//             type="tel"
//             placeholder="Telpon"
//             value={telpon}
//             onIonChange={(event) => setTelpon(event.detail.value!)}
//             required
//           ></IonInput>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//           <IonButton expand="block" onClick={handleRegister}> Register </IonButton>
//           <IonButton expand="block" fill='clear' routerLink='/login'> Already have an account? </IonButton>
//         </form>
//         <IonToast
//           isOpen={showToast}
//           onDidDismiss={() => setShowToast(false)}
//           message="Akun berhasil dibuat. Silakan login."
//           duration={3000}
//           color="success"
//         />
//         <IonLoading
//           isOpen={showLoading}
//           message={'Tunggu Sebentar...'}
//         />
//       </IonContent>
//     </IonPage>
//   );
// };

// export default RegisterPage;
//dipake di APK

import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonToast, IonLoading } from '@ionic/react';
import { Redirect, useHistory } from 'react-router';
import { useAuth } from '../auth';
import { auth, firestore } from '../firebase';
import './Home.css';

const RegisterPage: React.FC = () => {
  const { loggedIn } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [telpon, setTelpon] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleRegister = async () => {
    try {
      if (nama.trim() === '' || username.trim() === '' || telpon.trim() === '') {
        throw new Error('Nama, username, dan nomor telepon harus diisi');
      }

      setShowLoading(true);
      const credential = await auth.createUserWithEmailAndPassword(email, password);

      const user = {
        email: email,
        nama: nama,
        username: username,
        telpon: telpon,
        // Tambahkan data pengguna lain yang diinginkan
      };

      await firestore.collection('users').doc(credential.user?.uid).set(user);

      console.log('credential:', credential);
      setEmail('');
      setPassword('');
      setNama('');
      setUsername('');
      setTelpon('');
      setShowSuccessToast(true);
      setShowLoading(false);

      // Arahkan pengguna ke halaman login setelah pendaftaran
      history.replace('/login');
    } catch (error: any) {
      setErrorMessage(error.message);
      setShowToast(true);
      setShowLoading(false);
      if (error.code === 'auth/invalid-email') {
        setErrorMessage('Email tidak sesuai');
      }
    }
  };

  if (loggedIn) {
    return <Redirect to="/my/home" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form>
          <IonInput
            type="email"
            placeholder="Email"
            value={email}
            onIonChange={(event) => setEmail(event.detail.value!)}
            required
          ></IonInput>
          <IonInput
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={(event) => setPassword(event.detail.value!)}
            required
          ></IonInput>
          <IonInput
            type="text"
            placeholder="Nama"
            value={nama}
            onIonChange={(event) => setNama(event.detail.value!)}
            required
          ></IonInput>
          <IonInput
            type="text"
            placeholder="Username"
            value={username}
            onIonChange={(event) => setUsername(event.detail.value!)}
            required
          ></IonInput>
          <IonInput
            type="tel"
            placeholder="Telpon"
            value={telpon}
            onIonChange={(event) => setTelpon(event.detail.value!)}
            required
          ></IonInput>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <IonButton expand="block" onClick={handleRegister}> Register </IonButton>
          <IonButton expand="block" fill='clear' routerLink='/login'> Already have an account? </IonButton>
        </form>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={errorMessage}
          duration={3000}
          color="danger"
        />
        <IonToast
          isOpen={showSuccessToast}
          onDidDismiss={() => setShowSuccessToast(false)}
          message="Akun berhasil dibuat. Silakan login."
          duration={3000}
          color="success"
        />
        <IonLoading
          isOpen={showLoading}
          message={'Tunggu Sebentar...'}
        />
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;











