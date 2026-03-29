import { Col1, Col2Row1, Col2Row2, Col3Row1, Col3Row2 } from "./BentoContents";

export function BentoGrid() {
  return (
    <div className="mt-4 grid min-h-150 w-full grid-cols-2 p-4 md:grid-cols-3">
      {/* first col */}
      <Col1 />

      {/* 2ndCol */}
      <div className="col-span-1 grid grid-rows-[65%_35%]">
        {/* 2nd colRow1 */}
        <Col2Row1 />

        {/* 2nd colRow2 */}
        <Col2Row2 />
      </div>

      {/* 3rd col */}
      <div className="col-span-1 grid grid-rows-[35%_65%]">
        {/* 3rd Row1 */}
        <Col3Row1 />

        {/* 3rd Row2 */}
        <Col3Row2 />
      </div>
    </div>
  );
}
