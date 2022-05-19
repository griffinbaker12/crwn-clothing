import { useContext } from 'react';
import { ExportedThemeContext } from '../../routes/navigation/navigation.component';
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = () => {
  const { theme } = useContext(ExportedThemeContext);
  return (
    <SpinnerOverlay>
      <SpinnerContainer theme={theme} />
    </SpinnerOverlay>
  );
};

export default Spinner;
