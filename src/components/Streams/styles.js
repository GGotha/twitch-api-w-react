import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  max-width: 100%;
  margin-right: 3%;
`;

export const Repository = styled.div`
  max-width: 20rem;
  margin-top: 2%;
  text-align: center;
  margin-top: 4%;
  margin-right: 1%;
  ul {
    list-style: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 10%;
`;

export const Logo = styled.img`
  width: 10%;
  height: 5%;
`;
