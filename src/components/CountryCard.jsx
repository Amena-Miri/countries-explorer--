function CountryCard ({ country }) {

  const name = country.name?.common || "Unknown";
  const region = country.region || "Unknown";
  const population = country.population?.toLocaleString() || "0";
  const flag = country.flags?.svg || country.flags?.png || "";

  return (
    <div className="country-card">
      <div className="flag-container">
        {flag ? (
          <img src={flag} alt={`Flag of ${name}`} className="flag" />
        ) : (
          <div className="no-flag">No Flag Available</div>
        )}
      </div>

      <div className="country-info">
        <h3 className="country-name">{name}</h3>
        <p className="country-region">
          <strong>Region: </strong> {region}
        </p>
        <p className="country-population">
          <strong>Population: </strong> {population}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;