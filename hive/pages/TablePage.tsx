// 'use client';
// import React, { useEffect, useState } from 'react';
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from '@mui/material';
// import MaterialTable from '@mui/material';
// import axios from 'axios';

// const TablePage = () => {
//   const [data, setData] = useState([]);

//   const columns = [
//     { id: 'id', name: 'Id' },
//     { id: 'name', name: 'Name' },
//     { id: 'email', name: 'Email' },
//     { id: 'phone', name: 'Phone' },
//   ];

//   const getData = async () => {
//     await axios
//       .get('http://localhost:5000/employee')
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//     <div>
//         <select>
//             <option>Select for filter/sort</option>
//             <option>Filter</option>
//             <option>Sort</option>
//         </select>
//     </div>
//       <div style={{ textAlign: 'center', width: '90%', margin: 'auto' }}>
//         <h1>Table</h1>
//         <Paper>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => {
//                     return <TableCell key={column.id}>{column.name}</TableCell>;
//                   })}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data &&
//                   data.map((ele, i) => {
//                     return (
//                       <TableRow key={i}>
//                         {columns &&
//                           columns.map((column, i) => {
//                             let value = ele[column.id];
//                             return <TableCell key={value}>{value}</TableCell>;
//                           })}
//                       </TableRow>
//                     );
//                   })}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Paper>
//       </div>
//     </>
//   );
// };

// export default TablePage;


// 'use client';

// import React, { useEffect, useState } from 'react';
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   IconButton,
//   Dialog,
//   DialogContent,
//   TextField,
//   DialogActions,
//   Button
// } from '@mui/material';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import axios from 'axios';





// const TablePage = () => {
//   const [data, setData] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterDialogOpen, setFilterDialogOpen] = useState(false);
//   const [filters, setFilters] = useState({});
//   const [selectedColumn, setSelectedColumn] = useState('');
 
  


  
  

//   const columns = [
//     { id: 'id', name: 'Id' },
//     { id: 'name', name: 'Name' },
//     { id: 'email', name: 'Email' },
//     { id: 'phone', name: 'Phone' },
//   ];

//   const getData = async () => {
//     await axios
//       .get('http://localhost:5000/employee')
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);





//   const applyFilter = () => {
//     if (filters[selectedColumn]) {
//         const filteredData = data.filter((item) =>
//             String(item[selectedColumn]).includes(String(filters[selectedColumn]))
//         );
//         setData(filteredData);
//     } else {
//         getData(); // Reset to original data if filter is cleared
//     }
//     setFilterDialogOpen(false);
// };

//   const openFilterDialog = (columnId: React.SetStateAction<string>) => {
//     setSelectedColumn(columnId);
//     setFilterDialogOpen(true);
//   };

//   return (
//     <>
//       <div>
//         <select onChange={(e) =>{ setShowFilter(e.target.value === 'Filter')}}>
//           <option value=''>Select for filter/sort</option>
//           <option value="Filter">Filter</option>
//           <option value='sort'>Sort</option>
//         </select>
//       </div>
//       <div style={{ textAlign: 'center', width: '90%', margin: 'auto' }}>
//         <h1>Table</h1>
//         <Paper>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell key={column.id}>
//                       {column.name}
//                       {showFilter && (
//                         <IconButton onClick={() => openFilterDialog(column.id)}>
//                           <FilterListIcon />
//                         </IconButton>
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
         
//               <TableBody>
//                 {data.map((ele, i) => (
//                   <TableRow key={i}>
//                     {columns.map((column) => {
//                       let value = ele[column.id];
//                       return <TableCell key={column.id}>{value}</TableCell>;
//                     })}
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Paper>

//         <Dialog open={filterDialogOpen} onClose={() => setFilterDialogOpen(false)}>
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin="dense"
//               label={`Filter by ${selectedColumn}`}
//               type="text"
//               fullWidth
//               value={filters[selectedColumn] || ''}
//               onChange={(e) => setFilters({ ...filters, [selectedColumn]: e.target.value })}
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setFilterDialogOpen(false)}>Cancel</Button>
//             <Button onClick={applyFilter}>Apply</Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </>
//   );
// };

// export default TablePage;



// main component code 




// "use client"

// import React, { useEffect, useState } from 'react';
// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Dialog, DialogContent, TextField, DialogActions, Button, MenuItem, Select } from '@mui/material';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import SearchBox from './SearchBox'
// import axios from 'axios';
// import Selectsort from './Selectsort';
// import  ClearAll  from './ClearAll';

// const TablePage = () => {
//   const [data, setData] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);
//   const [showSort, setShowSort] = useState(false);
//   const [filterDialogOpen, setFilterDialogOpen] = useState(false);
//   const [filters, setFilters] = useState({});
//   const [selectedColumn, setSelectedColumn] = useState('');
//   const [sort, setSort] = useState({ field: '', order: '' });
//   const [selectedOption, setSelectedOption] = useState('');
//   const [searchInput, setSearchInput] = useState('');


//   const columns = [
//     { id: 'id', name: 'Id' },
//     { id: 'name', name: 'Name' },
//     { id: 'email', name: 'Email' },
//     { id: 'phone', name: 'Phone' },
//   ];

//   const getData = async () => {
//     await axios.get('http://localhost:8000/employee')
//       .then((res) => {
//         setData(res.data);
//         console.log(res.data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);


//   const handleSearch = (searchTerm) => {
//     setSearchInput(searchTerm);
//     if (searchTerm) {
//       const filteredData = data.filter((item) =>
//         columns.some((column) =>
//           String(item[column.id])
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase())
//         )
//       );
//       setData(filteredData);
//     } else {
//       getData(); // Reset to the original data if the search term is empty.
//     }
//   };
  


//   const applyFilter = () => {
//     if (filters[selectedColumn]) {
//         const filteredData = data.filter((item) =>
//             String(item[selectedColumn]).toLowerCase().includes(String(filters[selectedColumn]).toLowerCase())
//         );
//         setData(filteredData);
//     } else {
//         getData();
//     }
//     setFilterDialogOpen(false);
//   };

 
//   const clearAll = () => {
//     setFilters({});
//     setSort({ field: '', order: '' });
//     setShowFilter(false);
//     setShowSort(false);
//     setSearchInput('');
//     getData(); // To fetch the original unfiltered and unsorted data
// };
  

//   const openFilterDialog = (columnId: React.SetStateAction<string>) => {
//     setSelectedColumn(columnId);
//     setFilterDialogOpen(true);
//   };

//   const handleSort = (columnId: string) => {
//     const newData = [...data];
//     const order = sort.field === columnId && sort.order === 'asc' ? 'desc' : 'asc';

//     newData.sort((a, b) => {
//       if (a[columnId] < b[columnId]) return order === 'asc' ? -1 : 1;
//       if (a[columnId] > b[columnId]) return order === 'asc' ? 1 : -1;
//       return 0;
//     });

//     setSort({ field: columnId, order });
//     setData(newData);
//   };


//   const handleSelectChange = (e: { target: { value: string; }; }) => {
//     setShowFilter(e.target.value === 'Filter');
//     setShowSort(e.target.value === 'Sort');
//   };


//   return (
//     <>
//       {/* <div>
//         <select style={{border:'1px solid black',padding:"8px"}} onChange={(e) => {
//           setShowFilter(e.target.value === 'Filter');
//           setShowSort(e.target.value === 'Sort');
//         }}>
//           <option value=''>Select for filter/sort</option>
//           <option value="Filter">Filter</option>
//           <option value="Sort">Sort</option>
//         </select>
//       </div> */}

//      <div style={{display:'flex',justifyContent:'space-between',width:'90%',margin: 'auto'}}>
//         <Selectsort onChange={handleSelectChange} />
//         <ClearAll clearAll={clearAll}/>
//         <SearchBox onSearch={handleSearch}/>
//      </div>
    
//       <div style={{ textAlign: 'center', width: '90%', margin: 'auto' }}>
   
//         <h1>Table</h1>
//         <Paper>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell key={column.id}>
//                       {column.name}
//                       {showFilter && (
//                         <IconButton onClick={() => openFilterDialog(column.id)}>
//                           <FilterListIcon />
//                         </IconButton>
//                       )}
//                       {showSort && (
//                         <IconButton onClick={() => handleSort(column.id)}>
//                           {sort.field === column.id && sort.order === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
//                         </IconButton>
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data.map((row, index) => (
//                   <TableRow key={index}>
//                     {columns.map((column) => (
//                       <TableCell key={column.id}>{row[column.id]}</TableCell>
//                     ))}
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Paper>
//         {/* <Dialog open={filterDialogOpen} onClose={() => setFilterDialogOpen(false)}>
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin="dense"
//               label={`Filter by ${selectedColumn}`}
//               type="text"
//               fullWidth
//               value={filters[selectedColumn] || ''}
//               onChange={(e) => setFilters({ ...filters, [selectedColumn]: e.target.value })}
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setFilterDialogOpen(false)}>Cancel</Button>
//             <Button onClick={applyFilter}>Apply</Button>
//           </DialogActions>
//         </Dialog> */}

// <Dialog open={filterDialogOpen} onClose={() => setFilterDialogOpen(false)}>
//   <DialogContent>
//     <TextField
//       autoFocus
//       margin="dense"
//       label={`Filter by ${selectedColumn}`}
//       type="text"
//       fullWidth
//       value={filters[selectedColumn] || ''}
//       onChange={(e) => setFilters({ ...filters, [selectedColumn]: e.target.value })}
//     />

//     <Select
//       value={selectedOption}
//       onChange={(e) => setSelectedOption(e.target.value)}
//       fullWidth
//       style={{ marginTop: '20px' }} // added some margin for spacing
//     >
       
//       <MenuItem value="start with">Starts With</MenuItem>
//       <MenuItem value="ends with">Ends With</MenuItem>
//       <MenuItem value="containes">Containes</MenuItem>
//       <MenuItem value="option4">Equals</MenuItem>
//       {/* ... add other options as required */}
//     </Select>
//   </DialogContent>
//   <DialogActions>
//     <Button onClick={() => setFilterDialogOpen(false)}>Cancel</Button>
//     <Button onClick={applyFilter}>Apply</Button>
//   </DialogActions>
// </Dialog>

//       </div>
//     </>
//   );
// };

// export default TablePage;






// practice code rajat


"use client"

import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Dialog, DialogContent, TextField, DialogActions, Button, MenuItem, Select } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchBox from './SearchBox'
import axios from 'axios';
import Selectsort from './Selectsort';
import  ClearAll  from './ClearAll';
import ColumnSelector from './AddColumn'
import ReusableSelect from 'components/MultiSelect/MultiSelect';
import ReusableIconSelect from 'components/ReusableIconSelect/ReusableIconSelect';
import Pagination from 'components/Pagination/Pagination';
import { BiSort } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import CustomButton from 'components/CustomButton/CustomButton';
import Datepickercomponent from './Datepickercomponent';
import { ApiService } from 'hive/services/api.service';

const name = [{name:'Sort', icon: <BiSort />}, {name:'Filter', icon: <FaFilter />}]


const TablePage = () => {
  const [data, setData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [filters, setFilters] = useState({});
  const [selectedColumn, setSelectedColumn] = useState('');
  const [sort, setSort] = useState({ field: '', order: '' });
  const [selectedOption, setSelectedOption] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [visibleColumns, setVisibleColumns] = useState<string[]>([]);
  const[ShowGlobalHeader, setShowGlobalHeader] = useState<boolean>(true)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [personName, setPersonName] = useState<string[]>([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const [columnVisibility, setColumnVisibility] = useState({
    id: true,
    name: true,
    email: true,
    phone: true,
  });

  // ... other codes

  const handleColumnVisibilityChange = (column: string | number) => {
    setColumnVisibility((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };


  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const columns = [
    { id: 'id', name: 'Id' },
    { id: 'name', name: 'Name' },
    { id: 'email', name: 'Email' },
    { id: 'phone', name: 'Phone' },
  ];

  // const getData = async () => {
  //   await axios.get('http://localhost:3000/employee')
  //     .then((res) => {
  //       setData(res.data);
  //       console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);


  useEffect(() => {
    const apiService = new ApiService();

    const fetchData = async () => {
      try {
        const data = await apiService.fetchData('http://localhost:3000/employee');
        if (data) {
          setData(data);
          console.log(data);
        }
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchData();
  }, []);


  // useEffect(() => {
  //   handleSelectChange();
  // }, [personName]);


  const handleSearch = (searchTerm: React.SetStateAction<string>) => {
    setSearchInput(searchTerm);
    if (searchTerm) {
      const filteredData = data.filter((item) =>
        columns.some((column) =>
          String(item[column.id])
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
      setData(filteredData);
    } 
    
    else {
      getData(); // Reset to the original data if the search term is empty.
    }
  };
  


  const applyFilter = () => {
    if (filters[selectedColumn]) {
        const filteredData = data.filter((item) =>
            String(item[selectedColumn]).toLowerCase().includes(String(filters[selectedColumn]).toLowerCase())
        );
        setData(filteredData);
    } else {
        getData();
    }
    setFilterDialogOpen(false);
  };

 
  const clearAll = () => {
    setFilters({});
    setSort({ field: '', order: '' });
    setShowFilter(false);
    setShowSort(false);
    setSearchInput('');
    getData(); // To fetch the original unfiltered and unsorted data
};
  

  const openFilterDialog = (columnId: React.SetStateAction<string>) => {
    setSelectedColumn(columnId);
    setFilterDialogOpen(true);
  };

  const handleSort = (columnId: string) => {
    const newData = [...data];
    const order = sort.field === columnId && sort.order === 'asc' ? 'desc' : 'asc';

    newData.sort((a, b) => {
      if (a[columnId] < b[columnId]) return order === 'asc' ? -1 : 1;
      if (a[columnId] > b[columnId]) return order === 'asc' ? 1 : -1;
      return 0;
    });

    setSort({ field: columnId, order });
    setData(newData);
  };


  const handleSelectChange = (e: { target: { value: string; }; }) => {
    setShowFilter(e.target.value === 'Filter');
    setShowSort(e.target.value === 'Sort');
  };

  const handleClick=()=>{
    setShowGlobalHeader(!ShowGlobalHeader)
  }

  const name = [{name:'Sort', icon: 'S'}, {name:'Filter', icon: 'F'}]


 console.log("sorted column",visibleColumns)

 const handleDateSearch = (fromDate: number, toDate: number) => {
  if (fromDate && toDate) {
    const filteredData = data.filter(item => {
      const startDate = new Date(item.startDate);
      return startDate >= fromDate && startDate <= toDate;
    });
    setData(filteredData);
  } else {
    getData(); // If dates are not selected properly, reset to original data
  }
};

  return (
    <>

{/* <ColumnSelector 
        columns={columns} 
        columnVisibility={columnVisibility}
        handleColumnVisibilityChange={handleColumnVisibilityChange}
        disable={ShowGlobalHeader}
      /> */}


{/* <ReusableIconSelect 
label="Select Column"
options={name}
value={visibleColumns}
onChange={setVisibleColumns}
disabled={ShowGlobalHeader}/>  */}


      {/* <div>
        <select style={{border:'1px solid black',padding:"8px"}} onChange={(e) => {
          setShowFilter(e.target.value === 'Filter');
          setShowSort(e.target.value === 'Sort');
        }}>
          <option value=''>Select for filter/sort</option>
          <option value="Filter">Filter</option>
          <option value="Sort">Sort</option>
        </select>
      </div> */}
      <div style={{width:'90%',margin:'auto'}}>
      <Datepickercomponent onSearch={handleDateSearch}/>
      </div>


     <div style={{display:'flex',justifyContent:'space-between',width:'90%',margin: 'auto',alignItems:'center'}}>
        {/* <Selectsort onChange={handleSelectChange} /> */}
        {/* <Button onClick={handleClick} variant="outlined">{!ShowGlobalHeader? "Show": "Hide"}</Button> */}

        <ReusableIconSelect
  label="Enable Sort & Filter"
  options={name}
  value={personName}
  onChange={setPersonName}
  disabled={ShowGlobalHeader}
/>
        <ReusableSelect label="Select Column"
  options={columns}
  value={visibleColumns}
  onChange={setVisibleColumns}
  disabled={ShowGlobalHeader}/>
        {/* <ClearAll clearAll={clearAll}/> */}
        <SearchBox onSearch={handleSearch} disabled={ShowGlobalHeader}/>
        <CustomButton onClick={handleClick} variant= 'contained' sx={{height:'40px'}}>{ShowGlobalHeader? "Show": "Hide"}</CustomButton>

     </div>
    
      <div style={{ textAlign: 'center', width: '90%', margin: 'auto' }}>
   
        <h1>Table</h1>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    visibleColumns.includes(column.id) ? (
                      
                          
<TableCell key={column.id} style={{ fontWeight: "bold" }}>
{personName.includes('Sort') && (
                        <IconButton onClick={() => handleSort(column.id)}>
                          {sort.field === column.id && sort.order === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                        </IconButton>
                      )}
                      {column.name}
                      {personName.includes('Filter') && (
                        <IconButton onClick={() => openFilterDialog(column.id)}>
                          <FilterListIcon />
                        </IconButton>
                      )}
                      
                    </TableCell>                
                       
                    ) : null
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row, index) => (
                  <TableRow key={index}>
                    {columns.map((column) => (
                      // columnVisibility[column.id]
                      visibleColumns.includes(column.id) ? (
                        <TableCell key={column.id}>{row[column.id]}</TableCell>
                      ) : null
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination 
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    totalCount={data.length}  


             
            />
          </TableContainer>
        </Paper>
        {/* <Dialog open={filterDialogOpen} onClose={() => setFilterDialogOpen(false)}>    
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label={`Filter by ${selectedColumn}`}
              type="text"
              fullWidth
              value={filters[selectedColumn] || ''}
              onChange={(e) => setFilters({ ...filters, [selectedColumn]: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setFilterDialogOpen(false)}>Cancel</Button>
            <Button onClick={applyFilter}>Apply</Button>
          </DialogActions>
        </Dialog> */}

<Dialog open={filterDialogOpen} onClose={() => setFilterDialogOpen(false)}>
  <DialogContent>
    <TextField
      autoFocus
      margin="dense"
      label={`Filter by ${selectedColumn}`}
      type="text"
      fullWidth
      value={filters[selectedColumn] || ''}
      onChange={(e) => setFilters({ ...filters, [selectedColumn]: e.target.value })}
    />

    <Select
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
      fullWidth
      style={{ marginTop: '20px' }} // added some margin for spacing
    >
       
      <MenuItem value="start with">Starts With</MenuItem>
      <MenuItem value="ends with">Ends With</MenuItem>
      <MenuItem value="containes">Containes</MenuItem>
      <MenuItem value="option4">Equals</MenuItem>
      {/* ... add other options as required */}
    </Select>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setFilterDialogOpen(false)}>Cancel</Button>
    <Button onClick={applyFilter}>Apply</Button>
  </DialogActions>
</Dialog>

      </div>
    </>
  );
};

export default TablePage;




