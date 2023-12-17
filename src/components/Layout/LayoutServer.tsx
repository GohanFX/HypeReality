"use client";

import { useLayout } from "@/utils/useLayout";
import { LayoutComponent } from "./LayoutComponent";



export const Layout = ({children}: {children: React.ReactNode}) => {
    const layout = useLayout();
    return <LayoutComponent menuStates={layout.LayoutMenus}>
        {children}
    </LayoutComponent>
};