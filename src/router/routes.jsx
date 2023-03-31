import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, fileTrayFull, person, card } from "ionicons/icons";

import HomePage from "../pages/home/home";
import BillsPage from "../pages/bills/bills";
import CardsPage from "../pages/cards/cards";
import MePage from "../pages/me/me";

const AppRouter = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {/*
            Use the render method to reduce the number of renders your component will have due to a route change.

            Use the component prop when your component depends on the RouterComponentProps passed in automatically.
         */}
          <Route path="/home" render={() => <HomePage />} exact={true} />
          <Route path="/bills" render={() => <BillsPage />} exact={true} />
          <Route path="/cards" render={() => <CardsPage />} exact={true} />
          <Route path="/me" render={() => <MePage />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
          </IonTabButton>

          <IonTabButton tab="bills" href="/bills">
            <IonIcon icon={fileTrayFull} />
          </IonTabButton>

          <IonTabButton tab="cards" href="/cards">
            <IonIcon icon={card} />
          </IonTabButton>

          <IonTabButton tab="me" href="/me">
            <IonIcon icon={person} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default AppRouter;
