"use client"
import { useEffect } from "react";

export type LayoutMenus = {
    [key: string]: boolean;
};


const LayoutMenu: Record<string, boolean> = {
    "profile": false,
    "settings": false,
    "notifications": false,
};

export const useLayout = () => {
    

    if(typeof window !== "undefined"){
        if(localStorage.getItem("layoutMenu") === null){
            localStorage.setItem("layoutMenu", JSON.stringify(LayoutMenu));
        }
        useEffect(() => {
            const layoutMenuString = localStorage.getItem("layoutMenu");
            if (layoutMenuString) {
                const layoutMenu = JSON.parse(layoutMenuString);
                Object.keys(layoutMenu).forEach((menu) => {
                    LayoutMenu[menu] = layoutMenu[menu];
                });
            }
        }, [localStorage.getItem("layoutMenu")]);
    }

    const toggleMenu = (menu: string) => {
        LayoutMenu[menu] = !LayoutMenu[menu];
        localStorage.setItem("layoutMenu", JSON.stringify(LayoutMenu));
    };

    const getMenuNames = () => {
        return Object.keys(LayoutMenu);
    };

    const closeMenus = () => {
        Object.keys(LayoutMenu).forEach((menu) => {
            LayoutMenu[menu] = false;
        });
        localStorage.setItem("layoutMenu", JSON.stringify(LayoutMenu));
        return LayoutMenu;
    };


    const getState = (menu: string) => {
        return LayoutMenu[menu];
    };

    return {
        LayoutMenu,
        getMenuNames,
        closeMenus,
        toggleMenu,
        getState
    };
};