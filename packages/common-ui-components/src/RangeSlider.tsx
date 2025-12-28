import React, {
    useCallback,
    useEffect,
    useState,
    useRef
} from 'react';
import { Range } from './types';


// type Props = {
//     min: number
//     max: number;
//     onRangeChange: (range: Range) => void;
// };

// export default function RangeSlider({
//     min,
//     max, 
//     onRangeChange
// }: Props) {

//     const [minVal, setMinVal] = useState(min);
//     const [maxVal, setMaxVal] = useState(max);
//     const minValRef = useRef(min);
//     const maxValRef = useRef(max);
//     const range = useRef(null);

//         // convert to percentage
//     const getPercent = useCallback(
//         (value) => Math.round(((value - min) / (max - min)) * 100),
//         [min, max]
//     );

//     // set width of the range to decrease from the left side
//     useEffect(() => {
//         const minPercent = getPercent(minVal);
//         const maxPercent = getPercent(maxValRef.current);

//         if (range.current) {
//             range.current.style.left = `${minPercent}%`;
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [minVal, getPercent]);

//     // set the width of the range to decrease from right side
//     useEffect(() => {
//         const minPercent = getPercent(minValRef.current);
//         const maxPercent = getPercent(maxVal);

//         if (range.current) {
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [maxVal, getPercent]);

//     // Get min and max values when their state changes
//     useEffect(() => {
//         if (minVal != minValRef.current || maxVal != maxValRef.current) {
//             onRangeChange({ min: minVal, max: maxVal });
//             minValRef.current = minVal;
//             maxValRef.current = maxVal;
//         }
//     }, [minVal, maxVal, onRangeChange]);

//     return (
//                 <div className='w-full flex items-center justify-center flex-col space-y-14'>

//             {/* Display Price Value */}
//             <div className="w-[300px] px-4 flex items-center justify-between gap-x-5">
//                 <p > $ {minVal}</p>
//                 <div className="flex-1 border-dashed border border-neutral-500 mt-1"></div>
//                 <p> $ {maxVal} </p>
//             </div>


//             {/* Style the price range slider */}
//             <div className="multi-slide-input-container w-[300px]" 
//             // style={{ width }}
//             >

//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     value={minVal}
//                     onChange={(event) => {
//                         const value = Math.min(Number(event.target.value), maxVal - 1);
//                         setMinVal(value);
//                     }}
//                     className="thumb z-3 w-[300px]"
//                     style={{
//                         // width,
//                         zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
//                     }}
//                 />

//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     value={maxVal}
//                     onChange={(event) => {
//                         const value = Math.max(Number(event.target.value), minVal + 1);
//                         setMaxVal(value);
//                     }}
//                     className="thumb z-4 w-[300px]"
//                     style={{
//                         // "300px",
//                         zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
//                     }}
//                 />

//                 <div className="relative">
//                     <div
//                         style={{ backgroundColor: "#ff0303" }}
//                         className="absolute rounded-sm h-[6px] w-full z-1 track-slider"
//                     />

//                     <div
//                         ref={range}
//                         style={{ backgroundColor: "#ff0303" }}
//                         className="absolute rounded-sm h-[6px] z-2 range-slider"
//                     />

//                 </div>

//             </div>

//         </div>
//     );
// }




type Props = {
    min: number
    max: number;
    onRangeChange: (range: Range) => void;
};

export default function RangeSlider({
    min,
    max, 
    onRangeChange
}: Props) {

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);

    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    
    const range = useRef<HTMLDivElement>(null);


    // convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // set the width of the range to decrease from right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        if (minVal != minValRef.current || maxVal != maxValRef.current) {
            onRangeChange({ min: minVal, max: maxVal });
            minValRef.current = minVal;
            maxValRef.current = maxVal;
        }
    }, [minVal, maxVal, onRangeChange]);

    return (
        <div className='w-full flex items-center justify-center flex-col space-y-14'>

            {/* Display Price Value */}
            <div className="w-[300px] px-4 flex items-center justify-between gap-x-5">
                <p> $ {minVal} </p>
                <p> $ {maxVal} </p>
            </div>


            {/* Style the price range slider */}
            <div className="multi-slide-input-container w-[300px]" >
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                    }}
                    className="thumb z-3 pointer-events-none absolute h-0 outline-none w-[300px] cursor-pointer"
                    style={{
                        zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
                    }}
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                    }}
                    className="thumb z-4 pointer-events-none absolute h-0 outline-none w-[300px] cursor-pointer"
                    style={{
                        zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
                    }}
                />

                <div className="relative">
                    <div className="absolute rounded-sm h-[6px] w-full z-1 track-slider bg-[#cecece]"/>
                    <div ref={range} className="absolute rounded-sm h-[6px] z-2 range-slider bg-[#ff0303]" />
                </div>

            </div>

        </div>
    )
}



















// const valueCSS = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 1,
//     gap: "2px",
//     paddingTop: "10px",
// };

// const PriceRangeSlider = ({
//     min,
//     max,
//     trackColor = "#cecece",
//     onRangeChange,
//     rangeColor = "#ff0303",
//     valueStyle = valueCSS,
//     width = "300px",
// }) => {

//     const [minVal, setMinVal] = useState(min);
//     const [maxVal, setMaxVal] = useState(max);
//     const minValRef = useRef(min);
//     const maxValRef = useRef(max);
//     const range = useRef(null);


//     // convert to percentage
//     const getPercent = useCallback(
//         (value) => Math.round(((value - min) / (max - min)) * 100),
//         [min, max]
//     );

//     // set width of the range to decrease from the left side
//     useEffect(() => {
//         const minPercent = getPercent(minVal);
//         const maxPercent = getPercent(maxValRef.current);

//         if (range.current) {
//             range.current.style.left = `${minPercent}%`;
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [minVal, getPercent]);

//     // set the width of the range to decrease from right side
//     useEffect(() => {
//         const minPercent = getPercent(minValRef.current);
//         const maxPercent = getPercent(maxVal);

//         if (range.current) {
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [maxVal, getPercent]);

//     // Get min and max values when their state changes
//     useEffect(() => {
//         if (minVal != minValRef.current || maxVal != maxValRef.current) {
//             onRangeChange({ min: minVal, max: maxVal });
//             minValRef.current = minVal;
//             maxValRef.current = maxVal;
//         }
//     }, [minVal, maxVal, onRangeChange]);

//     return (
//         <div className='w-full flex items-center justify-center flex-col space-y-14'>

//             {/* Display Price Value */}
//             <div className="w-[300px] px-4 flex items-center justify-between gap-x-5">

//                 <p >
//                     $ {minVal}
//                 </p>

//                 <div className="flex-1 border-dashed border border-neutral-500 mt-1"></div>

//                 <p>
//                     $ {maxVal}
//                 </p>

//             </div>


//             {/* Style the price range slider */}
//             <div className="multi-slide-input-container" style={{ width }}>

//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     value={minVal}
//                     onChange={(event) => {
//                         const value = Math.min(Number(event.target.value), maxVal - 1);
//                         setMinVal(value);
//                     }}
//                     className="thumb z-3 pointer-events-none absolute h-0 outline-none"
//                     style={{
//                         width,
//                         zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
//                     }}
//                 />

//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     value={maxVal}
//                     onChange={(event) => {
//                         const value = Math.max(Number(event.target.value), minVal + 1);
//                         setMaxVal(value);
//                     }}
//                     className="thumb z-4 pointer-events-none absolute h-0 outline-none "
//                     style={{
//                         width,
//                         zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
//                     }}
//                 />

//                 <div className="relative">
//                     <div
//                         style={{ backgroundColor: trackColor }}
//                         className="absolute rounded-sm h-[6px] w-full z-1 track-slider "
//                     />

//                     <div
//                         ref={range}
//                         style={{ backgroundColor: rangeColor }}
//                         className="absolute rounded-sm h-[6px] z-2 range-slider"
//                     />

//                 </div>

//             </div>

//         </div>
//     )
// }

// export default PriceRangeSlider