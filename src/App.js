import React, {useState} from 'react';
import jobsData from './data.json'
import Jobs from './components/Jobs.js'
import Filters from './components/Filters.js'

function App() {

  const [filters, setFilters]  = useState([]);

  const handleTagClick = (tag) => {
    if(filters.includes(tag)) return;
    setFilters(filters => [...filters, tag]);
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  }

  return (
    <div className="App">
      <div className="top-bar"></div>
      <main>
        <div className="container">
          <Filters filters = {filters} clearFilters = {clearFilters} handleFilterClick={handleFilterClick}/>
          <Jobs hTag={handleTagClick} jobs={jobsData} filters={filters} />
        </div>
      </main>
    </div>
  );
}

export default App;
