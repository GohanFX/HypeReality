"use client"
import { useEffect } from "react";

export interface LayoutMenus {
    [key: string]: boolean
};

const LayoutMenus: LayoutMenus = {
    "profile": false,
    "settings": false,
    "notifications": false,
};

export const useLayout = () => {
    const toggleMenu = (menu: string) => {
        LayoutMenus[menu] = !LayoutMenus[menu];
    };

    useEffect(() => {
        console.log(LayoutMenus)
    }, [LayoutMenus]);

    const getState = (menu: string) => {
        return LayoutMenus[menu];
    };

    return {
        LayoutMenus,
        toggleMenu,
        getState
    };
};