import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "../../../../redux/countrySlice.jsx";

const regions = ["All", "Asia", "Europe", "Africa", "Americas", "Oceania"];

function FilterButtons() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.country.region);

  return (
    <ButtonGroup>
      {regions.map((region) => (
        <Button
          key={region}
          variant={selected === region ? "primary" : "outline-primary"}
          onClick={() => dispatch(setRegion(region))}
        >
          {region}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default FilterButtons;