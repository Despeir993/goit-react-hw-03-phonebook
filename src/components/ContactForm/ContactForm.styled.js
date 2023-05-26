import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;
  width: 300px;
  margin-bottom: 15px;

  border: 2px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled(Field)`
  height: 20px;
  outline: none;
  font-size: 16px;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 50%;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
`;

export const ErrorMessageEl = styled(ErrorMessage)`
  color: red;
`;
