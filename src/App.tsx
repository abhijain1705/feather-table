import { useEffect, useState } from 'react';
import './App.css';
import Table from './component/table';
import { generateData } from './dummy/generator';
import { PaginationType } from './types/type';

/**
 * App component — main entry for the Feather Table demo.
 *
 * - Generates a dataset of 5000 rows on mount and stores it in `data`.
 * - Manages pagination state (`pageIndex` and `pageSize`) in `pagination`.
 * - Tracks total number of rows in `totalRows`.
 * - Passes data and pagination handlers to the Table component:
 *   - data: current dataset
 *   - pagination: { pageIndex, pageSize }
 *   - onPageChange: updates pageIndex
 *   - rowsPerPage: available page-size options
 *   - onRowsPerPageChange: updates pageSize
 *   - paginationPlugin: pagination mode (classic)
 *   - totalRows: total dataset length
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {

  const [data, setData] = useState<Record<string, any>[]>([]);
  const [pagination, setpagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [totalRows, settotalRows] = useState(0);

  useEffect(() => {
    (() => {
      const response = generateData(5000);
      setData(response);
      settotalRows(response.length);
    })()
  }, [])

  return (
    <div className='App'>
      <h1 className='page-title'>Feather Table</h1>
      <Table
        data={data}
        pagination={pagination}
        onPageChange={(page) => {
          setpagination({ pageIndex: page, pageSize: pagination.pageSize })
        }}
        rowsPerPage={[10, 25, 50]}
        onRowsPerPageChange={(value) => {
          setpagination({ pageIndex: pagination.pageIndex, pageSize: value })
        }}
        paginationPlugin={PaginationType.classic}
        totalRows={totalRows} />
    </div>
  )
}

export default App
