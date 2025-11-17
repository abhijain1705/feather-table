
import './App.css';
import Table from './component/table';
import { generateData } from './dummy/generator';

/**
 * App component that serves as the main entry point for the Feather Table application.
 * It generates a dataset of 5000 entries and renders the Table component with the generated data.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {

  const data = generateData(5000);

  return (
    <div className='App'>
      <h1 className='page-title'>Feather Table</h1>
      <Table data={data} />
    </div>
  )
}

export default App
