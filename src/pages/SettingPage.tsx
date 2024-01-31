
import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonAvatar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonCard,
  IonCardContent,
  IonModal,
  IonInput,
} from '@ionic/react';
import { pencil, mail, call, logOut } from 'ionicons/icons';
import firebase from 'firebase/app';
import 'firebase/firestore';

import './Home.css';

const SettingPage: React.FC = () => {
  const [userData, setUserData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editedData, setEditedData] = useState<any>({});

  useEffect(() => {
    // Mengambil data dari Firebase Cloud Firestore
    const fetchData = async () => {
      const db = firebase.firestore();
      const user = firebase.auth().currentUser; // Mendapatkan pengguna yang sedang login
      if (user) {
        const uid = user.uid;
        const usersRef = db.collection('users').doc(uid);
        const snapshot = await usersRef.get();

        if (snapshot.exists) {
          setUserData([snapshot.data()]); // Mengubah state userData dengan data pengguna yang sedang login
        }
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    // Logika untuk menyimpan perubahan
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    if (user) {
      const uid = user.uid;
      const updatedData = { ...userData[0], ...editedData };
      db.collection('users')
        .doc(uid)
        .update(updatedData)
        .then(() => {
          console.log('Perubahan disimpan');
          closeModal();
          setUserData([updatedData]); // Mengubah data pengguna yang ditampilkan di card
        })
        .catch((error) => {
          console.error('Terjadi kesalahan saat menyimpan perubahan:', error);
        });
    }
  };

  const handleEditUser = () => {
    openModal();
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Logout berhasil
        console.log('Logout successful');
      })
      .catch((error) => {
        // Terjadi kesalahan saat logout
        console.error('Logout error:', error);
      });
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='tertiary'>
          <IonTitle className="ion-text-center">Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="center-container">
          {userData.map((user, index) => (
            <div key={index} className="user-container">
              <div className="user-avatar-container">
                <IonAvatar className="user-avatar">
                  <img
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    alt="User Avatar"
                  />
                </IonAvatar>
              </div>
              <IonList lines="none">
                <IonItem>
                  <IonIcon icon={pencil} slot="start" />
                  <IonLabel className="user-label">{user.nama}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={pencil} slot="start" />
                  <IonLabel className="user-label">{user.username}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={mail} slot="start" />
                  <IonLabel className="user-label">{user.email}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={call} slot="start" />
                  <IonLabel className="user-label">{user.telpon}</IonLabel>
                </IonItem>
              </IonList>
              <hr />
            </div>
          ))}
        </div>
      </IonContent>
      <div className="button-settingpage">
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" onClick={handleEditUser} color="primary">
              Edit
            </IonButton>
            <IonButton expand="block" onClick={handleLogout} color="danger">
              Logout
            </IonButton>
          </IonCardContent>
        </IonCard>
      </div>

      {/* Modal untuk pengeditan */}
      <IonModal isOpen={showModal} onDidDismiss={closeModal}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit User</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonIcon icon={pencil} slot="start" />
              <IonLabel position="floating">Nama</IonLabel>
              <IonInput
                type="text"
                name="nama"
                value={editedData.nama || userData[0]?.nama}
                onIonChange={handleInputChange}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonIcon icon={pencil} slot="start" />
              <IonLabel position="floating">Username</IonLabel>
              <IonInput
                type="text"
                name="username"
                value={editedData.username || userData[0]?.username}
                onIonChange={handleInputChange}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonIcon icon={mail} slot="start" />
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" value={userData[0]?.email} readonly></IonInput>
            </IonItem>

            <IonItem>
              <IonIcon icon={call} slot="start" />
              <IonLabel position="floating">Nomor Telepon</IonLabel>
              <IonInput
                type="tel"
                name="telpon"
                value={editedData.telpon || userData[0]?.telpon}
                onIonChange={handleInputChange}
                inputmode="numeric" // Hanya angka yang diperbolehkan
                pattern="[0-9]*" // Hanya angka yang diperbolehkan
              ></IonInput>
            </IonItem>

          </IonList>
          <IonButton expand="block" onClick={handleSaveChanges}>
            Simpan Perubahan
          </IonButton>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default SettingPage;



