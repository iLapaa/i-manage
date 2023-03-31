import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const BillsPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Bills</IonTitle>
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
        Bills content
      </div>
    </IonContent>
  </>
);

export default BillsPage;
