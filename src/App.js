import Appbar from './components/Appbar' 
import InvoiceList from './components/InvoiceList'
import AddInvoice from './components/AddInvoice'


import './App.css';

function App() {
  return (
    <div className="App">

       <Appbar/>
       <AddInvoice/>
       <InvoiceList/>
      
    
    </div>
  );
}

export default App;
