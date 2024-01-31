
import React, { useState, useEffect } from 'react';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButton,
  IonInput,
  IonContent,
  IonAlert,
  IonList,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonToast,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import { add, create, trash } from 'ionicons/icons';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useAuth } from '../auth';

import './Home.css';

interface Contact {
  id: string;
  nama: string;
  nomorTelepon: string;
}

const AddContact: React.FC = () => {
  const { userId } = useAuth();
  const [nama, setNama] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [editContactId, setEditContactId] = useState<string | null>(null);
  const [editNama, setEditNama] = useState('');
  const [editNomorTelepon, setEditNomorTelepon] = useState('');

  const openPhoneApp = (nomorTelepon: string) => {
    window.open(`tel:${nomorTelepon}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const db = firebase.firestore();
      const snapshot = await db.collection('data').where('userId', '==', userId).get();
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Contact[];
      setContacts(data);
    } catch (error) {
      console.error('Error fetching data from Firebase: ', error);
    }
  };

  const tambahData = async () => {
    try {
      if (nama && nomorTelepon) {
        const db = firebase.firestore();
        await db.collection('data').add({
          nama: nama,
          nomorTelepon: nomorTelepon,
          userId: userId,
        });
        console.log('Data successfully added to Firebase');
        setNama('');
        setNomorTelepon('');
        setShowModal(false);
        setShowAlert(true);
        fetchData();
      }
    } catch (error) {
      console.error('Error adding data to Firebase: ', error);
    }
  };

  const simpanData = () => {
    if (!nama || !nomorTelepon) {
      console.log('Please fill in all fields');
      return;
    }
    if (!/^\d+$/.test(nomorTelepon)) {
      setShowToast(true);
      return;
    }

    tambahData();
  };

  const hapusData = async (contactId: string) => {
    try {
      const db = firebase.firestore();
      await db.collection('data').doc(contactId).delete();
      console.log('Data successfully deleted from Firebase');
      fetchData();
    } catch (error) {
      console.error('Error deleting data from Firebase: ', error);
    }
  };

  const editData = (contact: Contact) => {
    setEditContactId(contact.id);
    setEditNama(contact.nama);
    setEditNomorTelepon(contact.nomorTelepon);
    setShowModal(true);
  };

  const updateData = async () => {
    try {
      if (!editContactId || (!editNama && !editNomorTelepon)) {
        console.log('Please fill in all fields');
        return;
      }
      if (!/^\d+$/.test(editNomorTelepon)) {
        setShowToast(true);
        return;
      }

      const db = firebase.firestore();
      await db.collection('data').doc(editContactId).update({
        nama: editNama || nama,
        nomorTelepon: editNomorTelepon || nomorTelepon,
      });
      console.log('Data successfully updated in Firebase');
      setEditContactId(null);
      setEditNama('');
      setEditNomorTelepon('');
      setShowModal(false);
      fetchData();
    } catch (error) {
      console.error('Error updating data in Firebase: ', error);
    }
  };

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle className="ion-text-center">Tambah kontak darurat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="ion-fab-button-container">
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </div>

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonContent className="modal-content">
          <h3>{editContactId ? 'Edit Data' : 'Tambah Data'}</h3>
          <IonItem>
            <IonLabel position="stacked">Masukkan nama</IonLabel>
            <IonInput
              type="text"
              value={editContactId ? editNama : nama}
              onIonChange={(e) => {
                if (editContactId) {
                  setEditNama(e.detail.value!);
                } else {
                  setNama(e.detail.value!);
                }
              }}
              className="input-with-border"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked" className="placeholder-down">
              Masukkan nomor telepon
            </IonLabel>
            <IonInput
              type="text"
              value={editContactId ? editNomorTelepon : nomorTelepon}
              onIonChange={(e) => {
                if (editContactId) {
                  setEditNomorTelepon(e.detail.value!);
                } else {
                  setNomorTelepon(e.detail.value!);
                }
              }}
              className="input-with-border"
            ></IonInput>
          </IonItem>
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Nomor telepon hanya boleh berisi angka"
            duration={2000}
            color="warning"
          />

          <IonButton onClick={editContactId ? updateData : simpanData}>
            {editContactId ? 'Perbarui' : 'Simpan'}
          </IonButton>

          <IonButton
            onClick={() => {
              setEditContactId(null);
              setEditNama('');
              setEditNomorTelepon('');
              setShowModal(false);
            }}
          >
            Batal
          </IonButton>
        </IonContent>
      </IonModal>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Kontak berhasil ditambahkan'}
        message={'Data kontak berhasil disimpan.'}
        buttons={[
          {
            text: 'OK',
            handler: () => {
              console.log('Confirm OK');
            },
          },
        ]}
      />

      <IonList>
        {contacts.map((contact) => (
          <IonItemSliding key={contact.id}>
            <IonItemOptions side="start">
              <IonItemOption onClick={() => editData(contact)}>
                <IonIcon icon={create} size="large" />
              </IonItemOption>
            </IonItemOptions>

            <IonItemOptions side="end">
              <IonItemOption
                color="danger"
                onClick={() => {
                  hapusData(contact.id);
                }}
              >
                <IonIcon icon={trash} size="large" />
              </IonItemOption>
            </IonItemOptions>

            <IonItem onClick={() => openPhoneApp(contact.nomorTelepon)}>
              <IonLabel>
                <h2>{contact.nama}</h2>
                <p>{contact.nomorTelepon}</p>
              </IonLabel>
            </IonItem>
          </IonItemSliding>
        ))}
      </IonList>
    </IonContent>
  );
};

export default AddContact;
//dipake DI APK













