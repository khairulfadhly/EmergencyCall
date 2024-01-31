import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';


const NotFoundPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        Halaman tidak di temukan.
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;
