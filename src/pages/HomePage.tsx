import React from 'react';
import './beranda.css';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import GambarPolisi from '../assets/polri.png';
import GambarAmbulance from '../assets/Ambulance.png';
import Gambar112 from '../assets/112.png';
import GambarDamkar from '../assets/damkar.png';
import GambarBasarnas from '../assets/basarnas.png';
import GambarBnpb from '../assets/bnpb.png';
import GambarPln from '../assets/PLN.png';
import GambarJasaMarga from '../assets/JasaMarga.png'

const HomePage: React.FC = () => {
  const data = [
    { id: 1, name: 'Polri', phone: '110', image: GambarPolisi },
    { id: 2, name: 'Ambulance', phone: '118', image: GambarAmbulance },
    { id: 3, name: 'Call center 112', phone: '112', image: Gambar112 },
    { id: 4, name: 'Pemadam Kebakaran', phone: '113', image: GambarDamkar },
    { id: 5, name: 'Basarnas SAR', phone: '115', image: GambarBasarnas },
    { id: 6, name: 'BNPB', phone: '117', image: GambarBnpb },
    { id: 7, name: 'PLN', phone: '123', image: GambarPln },
    { id: 8, name: 'JasaMarga', phone: '14080', image: GambarJasaMarga },
    { id: 9, name: 'Tangerang Merak', phone: '0800 1777 879', image: GambarJasaMarga },

  ];

  const handleCardClick = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle className="ion-text-center">Layanan Nomor Panggilan Darurat</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className="ion-justify-content-center">
          <IonRow>
            {data.map((item, index) => (
              <IonCol size="6" size-md="6" size-lg="4" key={item.id} style={{ padding: '10px' }}>
                <IonCard onClick={() => handleCardClick(item.phone)} className={`custom-card ${index === data.length - 1 ? 'last-card' : ''}`}>
                  <div className="card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <IonCardHeader>
                    <IonCardTitle>{item.name}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Call Center: {item.phone}
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default HomePage;




