import { InputHTMLAttributes, FC, useContext } from 'react';
import { ExportedThemeContext } from '../../routes/navigation/navigation.component';
import { FormInputLabel, Input, Group } from './form-input.styles';

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  const { theme } = useContext(ExportedThemeContext);

  return (
    <Group>
      <Input theme={theme} {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
