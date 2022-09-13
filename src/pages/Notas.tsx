import React, { useState } from 'react'; 
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCardContent, 
  IonInput, 
  IonItem, 
  IonLabel, 
} from '@ionic/react'; 
import './Notas.css'; 

const Notas: React.FC = () => {

  const [notas, setNotas] = useState<GLfloat>(0.0);
  const [number, setNumber] = useState<number>(0);
  const [change, setChange] = useState<boolean>(false);

  const validateNumber = (number: number) => {
    if (number > 20 || number < 0 || isNaN(number)) {
      return false;
    } else {
      return true;
    }
  }

  const calculate = () => {
    setNotas(number * 0.4)
    setChange(true);
  }

  const ponderacion = (param: number) => {
    let notes = (10 - param);
    return notes.toString().substring(0, 4);
  }

  const notes = (param: number) => {
    let notes = (10 - param) / 0.6;
    return notes.toString().substring(0, 4);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Corte de notas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Corte de notas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Descripción</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>
              Esta aplicacion está diseñada para ayudarte a calcular cuantos
              puntos necesitas para aprobar la materia a partir de la nota y tu
              primer corte, tomando en cuenta que el primer corte vale 40% y el
              segundo 60%
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Inserte sus Notas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>Nota del primer corte</IonCardSubtitle>
            <IonItem>
              {validateNumber(number) ? (
                <>
                  <IonLabel position="floating">Primer Corte</IonLabel>
                  <IonInput
                    type="number"
                    value={number}
                    onIonChange={(e) =>
                      setNumber(parseInt(e.detail.value!, 10))
                    }
                  ></IonInput>
                </>
              ) : (
                <>
                  <IonLabel color="danger" position="floating">
                    ERROR: No puede ser mayor de 20 o menor de 0
                  </IonLabel>
                  <IonInput
                    type="number"
                    value={number}
                    onIonChange={(e) =>
                      setNumber(parseInt(e.detail.value!, 10))
                    }
                    color="danger"
                  ></IonInput>
                </>
              )}
            </IonItem>
            {validateNumber(number) ? (
              <>
                <IonButton
                  expand="block"
                  style={{ margin: "10px" }}
                  onClick={() => calculate()}
                >
                  Calcular
                </IonButton>
              </>
            ) : (
              <>
                <IonButton
                  expand="block"
                  color="danger"
                  style={{ margin: "10px" }}
                  disabled={true}
                >
                  Calcular
                </IonButton>
              </>
            )}
            {change ? (
              <IonCard color="tertiary">
                <IonCardHeader>
                  <IonCardTitle>Resultados</IonCardTitle>
                  <IonCardSubtitle>Ponderación para pasar:</IonCardSubtitle>
                  <IonCardTitle>{ponderacion(notas)}</IonCardTitle>
                  <IonCardSubtitle>
                    Nota necesaria para pasar con un examen:
                  </IonCardSubtitle>
                  <IonCardTitle>{notes(notas)}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            ) : null}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Notas;
