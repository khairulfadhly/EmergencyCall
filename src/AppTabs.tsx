// import React, { } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { IonLabel, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, setupIonicReact, IonIcon, } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import HomePage from './pages/HomePage';
// import SettingPage from './pages/SettingPage';
// import { home as homeIcon, settings as settingIcon,  personAdd as addContactIcon } from 'ionicons/icons';

// /* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

// /* Theme variables */
// import './theme/variables.css';
// import { useAuth } from './auth';
// import AddContact from './components/AddContact';


// const AppTabs: React.FC = () => {
//   const { loggedIn } = useAuth();

//   if (!loggedIn) {
//     return <Redirect to="/login" />;
//   }

//   return (
//     <IonReactRouter>
//       <IonTabs>
//         <IonRouterOutlet>
//           <Route exact path="/my/home">
//             <HomePage />
//           </Route>
//           <Route path="/my/setting">
//             <SettingPage />
//           </Route>
//           <Route path="/my/add-contact">
//             <AddContact />
//           </Route>
//           <Redirect exact path="/" to="/my/home" />
//         </IonRouterOutlet>

//         <IonTabBar slot="bottom">
//           <IonTabButton tab="Home" href="/my/home">
//             <IonIcon icon={homeIcon} />
//             <IonLabel>Home</IonLabel>
//           </IonTabButton>

//           <IonTabButton tab="TambahKontak" href="/my/add-contact">
//             <IonIcon icon={addContactIcon} />
//             <IonLabel>Tambah Kontak</IonLabel>
//           </IonTabButton>

      
//         </IonTabBar>
//       </IonTabs>
//     </IonReactRouter>
//   );
// };

// export default AppTabs;


// ke - 2
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { IonLabel, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, setupIonicReact, IonIcon } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import HomePage from './pages/HomePage';
// import SettingPage from './pages/SettingPage';
// import { home as homeIcon, settings as settingIcon, personAdd as addContactIcon, map as mapIcon } from 'ionicons/icons';

// /* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

// /* Theme variables */
// import './theme/variables.css';
// import { useAuth } from './auth';
// import AddContact from './components/AddContact';
// import GoogleMaps from './pages/GoogleMaps';

// const AppTabs: React.FC = () => {
//   const { loggedIn } = useAuth();

//   if (!loggedIn) {
//     return <Redirect to="/login" />;
//   }

//   return (
//     <IonReactRouter>
//       <IonTabs>
//         <IonRouterOutlet>
//           <Route exact path="/my/home">
//             <HomePage />
//           </Route>
//           <Route path="/my/setting">
//             <SettingPage />
//           </Route>
//           <Route path="/my/add-contact">
//             <AddContact />
//           </Route>
//           <Route path="/my/google-maps">
//             <GoogleMaps />
//           </Route>
//           <Redirect exact path="/" to="/my/home" />
//         </IonRouterOutlet>

//         <IonTabBar slot="bottom">
//           <IonTabButton tab="Home" href="/my/home">
//             <IonIcon icon={homeIcon} />
//             <IonLabel>Home</IonLabel>
//           </IonTabButton>

//           <IonTabButton tab="TambahKontak" href="/my/add-contact">
//             <IonIcon icon={addContactIcon} />
//             <IonLabel>Tambah Kontak</IonLabel>
//           </IonTabButton>

//           <IonTabButton tab="GoogleMaps" href="/my/google-maps">
//             <IonIcon icon={mapIcon} />
//             <IonLabel>Google Maps</IonLabel>
//           </IonTabButton>
//         </IonTabBar>
//       </IonTabs>
//     </IonReactRouter>
//   );
// };

// export default AppTabs;




import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IonLabel, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, setupIonicReact, IonIcon, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import HomePage from './pages/HomePage';
import SettingPage from './pages/SettingPage';
import { home as homeIcon, settings as settingIcon, personAdd as addContactIcon, map as mapIcon } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useAuth } from './auth';
import AddContact from './pages/AddContact';
import GoogleMaps from './pages/GoogleMaps';

const AppTabs: React.FC = () => {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/my/home">
              <HomePage />
            </Route>
            <Route path="/my/setting">
              <SettingPage />
            </Route>
            <Route path="/my/add-contact">
              <AddContact />
            </Route>
            <Route path="/my/google-maps">
              <GoogleMaps />
            </Route>
            <Redirect exact path="/" to="/my/home" />
          </Switch>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/my/home">
            <IonIcon icon={homeIcon} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="TambahKontak" href="/my/add-contact">
            <IonIcon icon={addContactIcon} />
            <IonLabel>Tambah Kontak</IonLabel>
          </IonTabButton>

          <IonTabButton tab="GoogleMaps" href="/my/google-maps">
            <IonIcon icon={mapIcon} />
            <IonLabel>Google Maps</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Settings" href="/my/setting">
            <IonIcon icon={settingIcon} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default AppTabs;
