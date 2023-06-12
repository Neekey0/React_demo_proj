import './App.css';
import Display from './Emp/Display';
import EmpForm from './Emp/EmpForm';
//import { Provider } from 'react-redux';
//import store from './store';


function App() {

  return (
    <>
      <div className="flex w-full lg:flex-row flex-col-reverse lg:">
        {/* <div className='flex justify-between items-center'> */}


        {/* <div className="w-full md:w-2/5 flex flex-col-reverse"> */}
        <div className='flex-initial w-2/3 '>
          <Display />

        </div>
        <div className='flex-initial w-1/3 '>
          {/* <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20"> */}

          <EmpForm />
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>


    </>
  );
}

export default App;
