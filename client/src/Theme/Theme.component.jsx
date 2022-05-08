import { ThemeProvider } from 'styled-components';

import * as palette from './palette';
import * as mixins from './mixins';

const theme = { palette, mixins };

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
