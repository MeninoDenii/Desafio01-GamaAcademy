import React from "react";
import { useState } from "react";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
import {
  ContainerLanding,
  LeftContent,
  TotalContents,
  Titles,
  RigthContent,
  Hours,
  Information,
  ContainerButtons,
} from "./styles/StyledLandingPage";
import Timer from "./Timer";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  function handleSubmit(newState: SnackbarOrigin) {
    localStorage.setItem("myEmail", email);
    setState({ open: true, ...newState });
  }

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <ContainerLanding>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Email cadastrado com sucesso!"
        key={vertical + horizontal}
      />
      <TotalContents>
        <LeftContent>
          <Titles>
            <h1 id="first-title">BLACK</h1>
            <h1>FRIDAY</h1>
          </Titles>
          <text>Você nunca viu nada igual</text>
          <Information>
            <span>Seja o primeiro a saber!</span>
            <text id="subtitle">Preencha o formulario abaixo</text>
            <ContainerButtons>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button
                type="submit"
                onClick={() =>
                  handleSubmit({ vertical: "top", horizontal: "right" })
                }
              >
                Cadastrar
              </button>
            </ContainerButtons>
          </Information>
        </LeftContent>
        <RigthContent>
          <text id="days-title">
            Domingo, <strong>18</strong> de Julho
          </text>
          <span id="info-title">Faltam</span>
          <Hours>
            <Timer initialMinute={20} initialSeconds={10} />
          </Hours>
        </RigthContent>
      </TotalContents>
    </ContainerLanding>
  );
};

export default LandingPage;
