import { FieldError } from 'react-hook-form';
import StyledTextAreaContainer from './style';
import { TextareaHTMLAttributes } from 'react';

interface IDefaultTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  descriptionValue?: string;
  error?: FieldError;
}

const DescriptionTextArea = ({ descriptionValue }: IDefaultTextArea) => {
  return (
    <StyledTextAreaContainer>
      <textarea>{descriptionValue}</textarea>
    </StyledTextAreaContainer>
  );
};

export default DescriptionTextArea;
