// import React, { useEffect, useState } from 'react';
// import { Route, Redirect, Switch } from 'react-router-dom';
// import { setupIonicReact, IonApp } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import { AuthContext,useAuthInit } from './auth';





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
// import AppTabs from './AppTabs';
// import NotFoundPage from './pages/NotFoundPage';
// import { auth } from './firebase';


// setupIonicReact();


// const App: React.FC = () => {
//   const authState = useAuthInit();
//   const loggedInUserId = authState.auth?.userId;

//   return (
//     <IonApp>
//       <AuthContext.Provider value={authState.auth || { loggedIn: false }}>
//         <IonReactRouter>

//           <Switch>
//             <Route exact path="/login">
//               <LoginPage/>
//             </Route>

//             <Route exact path="/register">
//               <RegisterPage/>
//             </Route>

            


//             <Route path="/my">
//               <AppTabs />
//             </Route>

//             <Redirect exact path='/' to="/my/home" />
//             <Route>
//               <NotFoundPage/>
//             </Route>
//           </Switch>
//         </IonReactRouter>
//       </AuthContext.Provider>
//     </IonApp>
//   );
// };

// export default App;
// //YANG ORIIIIIIII JANGAN DIUBAH!!!!

import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { setupIonicReact, IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthContext,useAuthInit } from './auth';





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
import AppTabs from './AppTabs';
import NotFoundPage from './pages/NotFoundPage';
import { auth } from './firebase';


setupIonicReact();


const App: React.FC = () => {
  const authState = useAuthInit();
  const loggedInUserId = authState.auth?.userId;

  return (
    <IonApp>
      <AuthContext.Provider value={authState.auth || { loggedIn: false }}>
        <IonReactRouter>

          <Switch>
            <Route exact path="/login">
              <LoginPage/>
            </Route>

            <Route exact path="/register">
              <RegisterPage/>
            </Route>

            


            <Route path="/my">
              <AppTabs />
            </Route>

            <Redirect exact path='/' to="/my/home" />
            <Route>
              <NotFoundPage/>
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
//YANG ORIIIIIIII JANGAN DIUBAH!!!!
