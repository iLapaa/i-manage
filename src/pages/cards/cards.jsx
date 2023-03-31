import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const CardsPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Cards</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        Cards content
      </div>
    </IonContent>
  </>
);

export default CardsPage;
