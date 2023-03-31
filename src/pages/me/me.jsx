import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const MePage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Me</IonTitle>
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
        Me content
      </div>
    </IonContent>
  </>
);

export default MePage;
