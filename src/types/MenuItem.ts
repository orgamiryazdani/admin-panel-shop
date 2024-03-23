import { IconType } from "react-icons";

export type menuItem = {
    id: number;
    title: string;
    icon: IconType | any;
    path: string;
    subset?: {
        id: number;
        title: string;
        path: string;
        icon: IconType | any;
    }[]
};