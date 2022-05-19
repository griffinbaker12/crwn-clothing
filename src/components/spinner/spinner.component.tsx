import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/theme/theme.selector';
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = () => {
  const theme = useSelector(selectTheme);
  return (
    <SpinnerOverlay>
      <SpinnerContainer theme={theme} />
    </SpinnerOverlay>
  );
};

export default Spinner;
