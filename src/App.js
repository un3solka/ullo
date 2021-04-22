import { BrowserRouter } from 'react-router-dom';
import 'fontsource-roboto';
import RouterConfig from './navigation/RouterConfig';
import store from './redux/store';
import { Provider } from 'react-redux';
import { AppWrapper } from './styled';
import { TopBar } from './components/TopBar';
import { TabBar } from './components/TabBar';
import './app.css';

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <BrowserRouter>
          <TopBar />
          <RouterConfig />
          <TabBar />
        </BrowserRouter>
      </AppWrapper>
    </Provider>
  );
}

export default App;
