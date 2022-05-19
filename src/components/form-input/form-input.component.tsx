import { InputHTMLAttributes, FC } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/theme/theme.selector';
import { FormInputLabel, Input, Group } from './form-input.styles';

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  const theme = useSelector(selectTheme);

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
