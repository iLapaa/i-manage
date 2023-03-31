import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const HomePage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
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
        Home content
      </div>
    </IonContent>
  </>
);

export default HomePage;
