function RegionFilter({ selectedRegion, onRegionChange }) {
  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  return ( 
    <div className="region-filter">
      <select 
        className="region-select"
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        >
          {regions.map((region) => (
            <option key={region.value} value={region.value}>
              {region.label}
            </option>
          ))}
        </select>
    </div>
  );
}

export default RegionFilter;