import { data } from "../../constants/data";

const LocationSelector = () => {
  const countries = Object.keys(data.countries);
  const cities = Object.keys(data.cities);

  console.log(countries, cities);
  return (
    <div>
      <h1>Location Selector</h1>
      <div>
        <label htmlFor="country">
          Country :
          <select className="bg-slate-800">
            <option value="" hidden>
              Select Country
            </option>
            {countries.map((item) => (
              <option className="bg-slate-800" key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>{" "}
        <label htmlFor="cities">
          Country :
          <select className="bg-slate-800">
            <option value="" hidden>
              Select Ci
            </option>
            {countries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>{" "}
        <label htmlFor="country">
          Country :
          <select className="bg-slate-800">
            <option value="" hidden>
              Select Country
            </option>
            {countries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default LocationSelector;
