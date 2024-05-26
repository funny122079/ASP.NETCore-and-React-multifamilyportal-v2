import { useState } from "react";
import ProtoTypes from "prop-types";
import MultiRangeSlider from "multi-range-slider-react";
function RangeSlider({
  title,
  minRange,
  maxRange,
  standard,
  defaultMinRange,
  defaultMaxRange,
  text,
  symbol,
}) {
  const [minValue, set_minValue] = useState(defaultMinRange || 25);
  const [maxValue, set_maxValue] = useState(defaultMaxRange || 75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div className="property-sidebar__single mg-top-20">
      <h4 className="property-sidebar__title">{title}</h4>
      <div className="price-filter homec-border pd-top-20">
        <div className="price-filter-inner">
          <div id="slider-range"></div>
          <div className="price_slider_amount">
            <MultiRangeSlider
              min={minRange || 0}
              max={maxRange || 100}
              step={1}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => {
                handleInput(e);
              }}
              baseClassName="range-slider"
              ruler={false}
              label={false}
            />
            <div className="price_slider_amount mg-top-30">
              <div className="label-input">
                <input
                  type="text"
                  id="amount"
                  name="price"
                  placeholder="Add Your Price"
                  value={`${text ? text : ""} ${
                    symbol ? symbol : ""
                  }${minValue} ${standard ? standard : ""} - ${
                    symbol ? symbol : ""
                  }${maxValue} ${standard ? standard : ""}`}
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RangeSlider.propTypes = {
  title: ProtoTypes.string.isRequired,
  minRange: ProtoTypes.number.isRequired,
  maxRange: ProtoTypes.number.isRequired,
  defaultMinRange: ProtoTypes.number,
  defaultMaxRange: ProtoTypes.number,
  standard: ProtoTypes.string,
  text: ProtoTypes.string,
  symbol: ProtoTypes.string,
};

export default RangeSlider;
