import { ReactNode } from "react";

export type menuItem = {
    id: number;
    title: string;
    icon: ReactNode;
    path: string;
    subset?: {
        id: number;
        title: string;
        path: string;
        icon: ReactNode;
    }[]
};