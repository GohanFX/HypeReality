"use client";

import { useLayout } from "@/utils/useLayout";
import { LayoutComponent } from "./LayoutComponent";

export const Layout = ({children}: {children: React.ReactNode}) => {
    const layout = useLayout();
    return <LayoutComponent clickEvent={
        (e: React.MouseEvent<HTMLElement>) => {
            if(!(layout.getMenuNames().includes(e.currentTarget.id))) {
                console.log(layout.LayoutMenu)
                layout.closeMenus();
                
            }

        }
    } menuStates={layout.LayoutMenu}>
        {children}
    </LayoutComponent>
};