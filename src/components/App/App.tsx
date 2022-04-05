

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../../store/rootReducer';
import OrderForm from '../OrderForm/OrderForm';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function App() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1 style={{textAlign: 'center'}}>Детали заказа</h1>
          <OrderForm />
        </div>
      </Provider>
    )
}

export default App