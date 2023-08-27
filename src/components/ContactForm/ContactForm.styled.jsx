import styled from 'styled-components';
export const FormContainer = styled.section`
  /* width: 450px;
  height: 100%;
  border: 2px solid black;
  border-radius: 4px;
  margin: 0, auto; */
  width: 300px;
  height: 250px;
  background-image: linear-gradient(#f3f3ab, yellow);
  border: 2px solid yellow;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 40px;
  box-shadow: 18px 10px 32px 2px rgba(110, 110, 15, 0.75);
`;

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 30px;
  padding-top: 20px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  display: block;

  height: 30px;
  border-radius: 8px;
  width: 200px;
`;

export const BtnSubmit = styled.button`
  display: block;
  width: 150px;
  height: 30px;
  color: white;
  background-color: #0d00ff;
  padding: 6px 8px;
  margin: 0 auto;

  border-radius: 8px;
  border-color: transparent;
  &:hover {
    color: #0d00ff;
    background-color: white;
    border-color: #0d00ff;
  }
`;
export const InputLabel = styled.label`
  font-weight: 500;
`;
