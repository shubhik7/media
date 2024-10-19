import classNames from "classnames";

function Skeleton({ times, className }) {
  const outerClassNames = classNames(
    //position inner element absolutely
    "relative",
    //hide inner elemet if not overlapping
    "overflow-hidden",
    "bg-gray-200",
    //rounded corners
    "rounded",
    //little bit margin bottom
    "mb-2.5",
    //set height n width of box
    className
  );
  const innerClassNames = classNames(
    //applies animation we put together
    "animate-shimmer",
    //position absolutely
    "absolute",
    //expand it to fill outer div
    "inset-0",
    //makes inner div to move far left hand side of outer div
    "-translate-x-full",
    //change gradient to ri8
    "bg-gradient-to-r",
    //start gradient with gray
    "from-gray-200",
    //transition to white
    "via-white",
    //end with gray
    "to-gray-200"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        //outer div stays in one place
        //inner div keeps sliding in and out of outer div
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
