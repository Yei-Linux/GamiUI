import styled from "@emotion/styled";
import RichText from "../../atoms/RichText";

export const FormWrapper = styled.div<{}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: "white";
  width: 450px;
  padding: 25px;
  border-radius: 25px;
`;

export const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const FormLabel = styled(RichText)`
  margin-bottom: 1rem;
`;
