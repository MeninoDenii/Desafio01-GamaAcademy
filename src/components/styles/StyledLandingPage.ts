import styled from "styled-components";

export const ContainerLanding = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: black;
`;

export const TotalContents = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.5fr;
  justify-content: center;
  gap: 50px;
  align-items: center;
  width: 100%;
`;

export const LeftContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text {
    color: #ee0808;
    text-align: center;
    font-size: 36px;
  }
`;

export const RigthContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  text {
    color: white;
  }
  span {
    color: white;
  }
  strong {
    color: #ee0808;
  }
  #days-title {
    font-size: 48px;
  }
  #info-title {
    font-size: 24px;
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 96px;
    color: white;
    font-weight: bold;
  }
  #first-title {
    color: #ee0808;
  }
`;

export const Hours = styled.div`
  width: 100%;
  max-width: 566px;
  max-height: 161px;
  box-shadow: 0px 4px 4px rgba(91, 91, 91, 0.25);
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
`;

export const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  color: white;
  span {
    font-size: 36px;
  }
  #subtitle {
    text-align: initial;
    font-size: 18px;
    color: white;
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  input {
    padding: 10px;
    margin-top: 20px;
    border-radius: 15px;
    width: 400px;
    outline: 0;
  }
  button {
    padding: 10px;
    border-radius: 10px;
    border: 0;
    width: 200px;
    cursor: pointer;
    background: red;
    color: white;
    font-weight: bold;
    margin-top: 20px;
    outline: 0;
    :hover {
      background: #800000;
      transition: 0.8s;
    }
  }
`;
