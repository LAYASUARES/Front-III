import { useState } from "react";
import { DecimaQuartaAulaItem } from "../../components/DecimaQuartaAulaItem";

export function DecimaQuartaAula() {
  const registers = [{ id: 1, title: "Primeiro registro" }];

  const [registerListVisible, setRegisterListVisible] = useState(true);

  function deleteRegisterFromList() {}

  return (
    <>
      <h1>Lista de Registros</h1>

      <button onClick={() => setRegisterListVisible(!registerListVisible)}>{`${
        registerListVisible ? "Ocultar" : "Mostrar"
      } Lista`}</button>

      {
        
        registerListVisible ? (
          <ul>
            {
              
              registers.map((register) => {
                return (
                  <DecimaQuartaAulaItem
                    key={register.id}
                    registerData={register}
                    deleteRegister={(registerReturned) =>
                      deleteRegisterFromList(registerReturned)
                    }
                  />
                );
              })
            }
          </ul>
        ) : (
          <p>A lista está oculta</p>
        )
      }
    </>
  );
}
