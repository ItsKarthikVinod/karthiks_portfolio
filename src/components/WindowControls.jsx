import React from 'react'
import useWindowStore from '#store/window';
import { X , Maximize2, Minus} from 'lucide-react';

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  const isMobile = window.innerWidth <= 768;
  const iconSize = isMobile ? 18 : 14;
  return (
    <div id="window-controls">
      <div className="close " onClick={() => closeWindow(target)}>
        <X size={iconSize} className=" mt-px ml-px text-[#bf3b3b] " />
      </div>
      <div className="minimize">
        <Minus className="size-3 mt-px ml-px text-[#bf3b3b]" />
      </div>
      <div className="maximize">
        <Maximize2 className="size-2.5 mt-px ml-px text-[#0c6b2c]" />
      </div>
    </div>
  );
}

export default WindowControls