"use client"
import { PlusCircle } from "lucide-react";
import { useFlexProperties } from "../flex-provider";
export function EditableButton({ property }) {
    const { activateProperty } = useFlexProperties();
    return (
        <button className="absolute right-[6px] top-[2px] pluscircle" onClick={() => activateProperty(property)}>
            <PlusCircle size={15} className="translate-y-[3px] text-white/80  hover:text-orange-500 cursor-pointer" />
        </button>
    );

}

