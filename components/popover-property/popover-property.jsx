"use client"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverNamed } from "./popover-named";
import { useFlexProperties } from "@/components/flex-provider";
export function PopoverProperty({ value = "row", property = 'flex-direction', list = ['inherit', 'row', 'column', 'row-reverse', 'column-reverse'] }) {
    const { cssVars } = useFlexProperties();

    return (
        <Popover align="end" >
            <PopoverTrigger>

                {value}
            </PopoverTrigger>
            <PopoverContent align="start" sideOffset={5} className="w-fit p-0 outline-1 outline-white/20 rounded-xs">

                <div className="flex flex-col gap-[2px] w-fit">
                    {list.map((item, index) => <PopoverNamed key={item} value={item} property={property} >{item}</PopoverNamed>)
                    }
                </div>
            </PopoverContent>
        </Popover>
    );
}

