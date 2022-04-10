import { ThemeProvider } from 'styled-components';

import * as mixins from './mixins';

const theme = {
  palette: { SUB_COLOR: 'grey', MAIN_COLOR: 'black' },
  mixins,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
