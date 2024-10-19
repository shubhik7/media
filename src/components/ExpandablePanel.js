import { useState } from "react";
import { VscTriangleDown, VscTriangleLeft } from "react-icons/vsc";

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div className="text-xl cursor-pointer" onClick={handleClick}>
          {expanded ? <VscTriangleDown /> : <VscTriangleLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}
export default ExpandablePanel;
