import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import VideoBrowser from './components/VideoBrowser';
import { Grid } from '@material-ui/core'

function App() {

  return (
    <Grid>
      <AppHeader />
      <VideoBrowser />
      <AppFooter />
    </Grid>
  );
}

export default App;
