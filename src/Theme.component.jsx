import { ThemeProvider } from 'styled-components';

const theme = { palette: { SUB_COLOR: 'grey', MAIN_COLOR: 'black' } };

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
