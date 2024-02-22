import { useEffect, useRef } from 'react';

export const useClickOutside = (handler: () => void) => {
    const domNode = useRef<HTMLUListElement>(null);
    useEffect(() => {
        function handleClickOutside(event: any) {
          if (domNode.current && !domNode.current.contains(event.target) && event.target.name !== "dropdownStarter") {
            handler();
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      });
    return domNode;
}