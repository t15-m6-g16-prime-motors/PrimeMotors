/* eslint-disable react-hooks/exhaustive-deps */
import { StyledDivInputRange } from './style';
import { Dispatch, useEffect, useRef, useState } from 'react';

interface IInputRange {
  minValue: number;
  maxValue: number;
  price?: boolean;
  title: string;
  setMinValue: Dispatch<React.SetStateAction<number>>;
  setMaxValue: Dispatch<React.SetStateAction<number>>;
}

const InputRange = ({
  minValue,
  maxValue,
  title,
  price,
  setMinValue,
  setMaxValue
}: IInputRange) => {
  const [sliderOneValue, setSliderOneValue] = useState(minValue);
  const [sliderTwoValue, setSliderTwoValue] = useState(maxValue);

  const minGap = 0;
  const sliderOneRef = useRef<HTMLInputElement | null>(null);
  const sliderTwoRef = useRef<HTMLInputElement | null>(null);
  const sliderTrackRef = useRef<HTMLDivElement | null>(null);

  const sliderMaxValue = maxValue;

  useEffect(() => {
    slideOne(sliderOneValue);
    slideTwo(sliderTwoValue);
  }, [sliderOneValue, sliderTwoValue]);
  
  useEffect(() => {
    if (minValue != undefined && maxValue != undefined) {
      setSliderOneValue(minValue);
      setSliderTwoValue(maxValue);
    }
  }, [minValue, maxValue]);
  const slideOne = (newValue: number) => {
    if (sliderTwoValue - newValue <= minGap) {
      newValue = sliderTwoValue - minGap;
    }

    setSliderOneValue(newValue);
    fillColor();
  };

  const slideTwo = (newValue: number) => {
    if (newValue - sliderOneValue <= minGap) {
      newValue = sliderOneValue + minGap;
    }
    setSliderTwoValue(newValue);
    fillColor();
  };

  const fillColor = () => {
    if (
      sliderOneRef.current &&
      sliderTwoRef.current &&
      sliderTrackRef.current
    ) {
      const percent1 =
        (parseInt(sliderOneRef.current.value) / sliderMaxValue) * 100;
      const percent2 =
        (parseInt(sliderTwoRef.current.value) / sliderMaxValue) * 100;
      sliderTrackRef.current.style.background = `linear-gradient(to right, #DADAE5 ${percent1}% , var(--color-brand-2) ${percent1}% , var(--color-brand-2) ${percent2}%, #DADAE5 ${percent2}%)`;
    }
  };

  return (
    <StyledDivInputRange>
      <h2 className='title'>{title}</h2>
      <div className='values'>
        <span id='value1'>
          {price && 'R$ '}
          {sliderOneValue.toLocaleString()}
        </span>
        <span id='value2'>
          {price && 'R$ '}
          {sliderTwoValue.toLocaleString()}
        </span>
      </div>

      <div className='container'>
        <div className='slider-track' ref={sliderTrackRef}></div>
        <input
          type='range'
          min={minValue}
          max={maxValue}
          value={sliderOneValue}
          onChange={(e) => slideOne(parseInt(e.target.value))}
          onMouseUp={() => setMinValue(sliderOneValue)}
          ref={sliderOneRef}
        />
        <input
          type='range'
          min={minValue}
          max={maxValue}
          value={sliderTwoValue}
          onChange={(e) => slideTwo(parseInt(e.target.value))}
          onMouseUp={() => setMaxValue(sliderTwoValue)}
          ref={sliderTwoRef}
        />
      </div>
    </StyledDivInputRange>
  );
};

export default InputRange;
