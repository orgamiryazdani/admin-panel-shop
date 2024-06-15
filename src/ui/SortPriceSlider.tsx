import { Slider } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function valuetext(value: number) {
  return `${value}°C`;
}

const SortPriceSlider = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<number[]>([
    Number(searchParams.get("price_min")) || 0,
    Number(searchParams.get("price_max")) || 1000,
  ]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(Array.isArray(newValue) ? newValue : [newValue]);
    if (Array.isArray(newValue)) {
      searchParams.set("price_min", newValue[0].toString());
      searchParams.set("price_max", newValue[1].toString());
    } else {
      searchParams.set("price_min", newValue.toString());
      searchParams.set("price_max", newValue.toString());
    }
    setSearchParams(searchParams);
  };

  return (
    <Slider
      getAriaLabel={() => "Temperature range"}
      value={value}
      onChange={handleChange}
      valueLabelDisplay='auto'
      getAriaValueText={valuetext}
      min={1}
      max={1000}
    />
  );
};

export default SortPriceSlider;