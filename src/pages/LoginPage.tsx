import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonPage,
  IonToast,
  IonLoading,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonCol,
  IonAlert,
} from '@ionic/react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';
import { auth } from '../firebase';
import { mailOutline, keyOutline, refreshOutline } from 'ionicons/icons';
import './Home.css';

import GambarLogin from '../assets/112Bg.png';

const LoginPage: React.FC = () => {
  const { loggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showTermsDialog, setShowTermsDialog] = useState(false);

  const handleLogin = async () => {
    try {
      setShowLoading(true);
      const credential = await auth.signInWithEmailAndPassword(email, password);
      console.log('credential:', credential);
      setShowLoading(false);
    } catch (error: any) {
      setErrorMessage(error.message);
      setShowToast(true);
      setShowLoading(false);
      if (error.code === 'auth/invalid-email') {
        setErrorMessage('Email tidak sesuai');
      }
    }
  };

  const handleForgotPassword = async () => {
    try {
      setShowLoading(true);
      await auth.sendPasswordResetEmail(email);
      setShowLoading(false);
      setErrorMessage('Email untuk reset password telah dikirim.');
      setShowToast(true);
    } catch (error: any) {
      setShowLoading(false);
      setErrorMessage(error.message);
      setShowToast(true);
    }
  };

  const handleTermsDialog = () => {
    setShowTermsDialog(true);
  };

  if (loggedIn) {
    return <Redirect to="/my/home" />;
  }

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="login-page card-container">
          <IonCol>
            <div className="image-container">
              <img src={GambarLogin} alt="Card" className="card-image" />
            </div>
          </IonCol>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle style={{ fontWeight: 'bold', textAlign: 'center' }}>Login</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <form>
                <div className="input-container">
                  <IonIcon icon={mailOutline} className="input-icon" />
                  <IonInput
                    type="email"
                    placeholder="Email"
                    value={email}
                    onIonChange={(event) => setEmail(event.detail.value!)}
                    required
                  ></IonInput>
                </div>
                <div className="input-container">
                  <IonIcon icon={keyOutline} className="input-icon" />
                  <IonInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onIonChange={(event) => setPassword(event.detail.value!)}
                    required
                  ></IonInput>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <IonButton expand="block" onClick={handleLogin}>
                  Login
                </IonButton>
                <IonButton expand="block" fill="clear" routerLink="/register">
                Don&apos;t have an account?
                </IonButton>
              </form>
            </IonCardContent>
          </IonCard>
          <div className="forgot-password-container">
            <IonButton expand="full" fill="clear" color="medium" onClick={() => setShowForgotPassword(true)}>
              <IonIcon icon={refreshOutline} slot="start" />
              Forgot Password?
            </IonButton>
          </div>
          <div className="terms-condition-container">
            <IonButton expand="block" fill="clear" color="danger" onClick={handleTermsDialog}>
              Term and Condition
            </IonButton>
          </div>
        </div>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={errorMessage}
          duration={3000}
          color="danger"
        />
        <IonLoading isOpen={showLoading} message={'Tunggu Sebentar...'} />
        <IonAlert
          isOpen={showForgotPassword}
          onDidDismiss={() => setShowForgotPassword(false)}
          header="Forgot Password"
          inputs={[
            {
              name: 'email',
              type: 'email',
              placeholder: 'Email',
            },
          ]}
          message="Masukkan alamat email yang terdaftar pada form email untuk mengatur ulang kata sandi."
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => setShowForgotPassword(false),
            },
            {
              text: 'Send',
              handler: (data) => {
                setEmail(data.email);
                handleForgotPassword();
              },
            },
          ]}
        />
        <IonAlert //alert untuk Term and Condition
          isOpen={showTermsDialog}
          onDidDismiss={() => setShowTermsDialog(false)}
          header="Term and Condition"
          message="PERHATIAN!! Melakukan pangilan darurat di peruntukan hanya untuk keadaan atau situasi darurat.
          Melakukan pangilan darurat untuk tujuan selain keadaan dan situasi darurat akan dikenakan sanksi sesuai Undang-undang yang berlaku."
          buttons={[
            {
              text: 'Close',
              handler: () => setShowTermsDialog(false),
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;














