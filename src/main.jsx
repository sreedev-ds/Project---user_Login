import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import {store} from './Store/index.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
      <Provider store={store}>
    <App />
    </Provider>
  
)
