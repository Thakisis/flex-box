"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

import { splitunit } from '@/lib/utils';

const units = ['px', 'rem', 'em', '%', 'vw', 'vh'];

export function PopoverUnit({ value = "10px", onChange }) {
    const { value: amount, unit } = splitunit(value);
    const [numero, setNumero] = useState(amount);
    const [open, setOpen] = useState(false);
    const isValidCSSValue = (val) => /^-?\d*\.?\d*$/.test(val); // Solo números y un punto decimal permitido

    const onChangeUnit = (newUnit) => {
        const sanitizedValue = newUnit === "px" ? parseInt(numero, 10) : numero;
        onChange(`${sanitizedValue}${newUnit}`);
    };


    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setOpen(false); // Cierra el popover cuando se presiona Enter
        }
    };
    const onChangeAmount = (e) => {
        let newValue = e.target.value.replace(/[^\d.]/g, ""); // Eliminar caracteres no numéricos
        if (unit === "px") newValue = newValue.replace(".", ""); // Evitar decimales en px

        if (isValidCSSValue(newValue) || newValue === "") {
            setNumero(newValue);
            const finalValue = newValue !== "" ? parseFloat(newValue) : 0;
            onChange(`${finalValue}${unit}`);
        }
    };

    return (
        <Popover open={open} align="end" onOpenChange={setOpen}>
            <PopoverTrigger className="" asChild>
                <button onClick={() => setOpen(!open)} className="focus:ring-0 focus:outline-none focus:border-transparent">
                    <span className=" hover:underline  decoration-orange-500 decoration-[2px] underline-offset-[3px]">{value}</span><span className="text-white"> ; </span>
                </button>
            </PopoverTrigger>
            <PopoverContent align="start" sideOffset={5} className="bg-[#1c1c1e] w-fit p-0 outline-1 outline-white/20 rounded-xs">
                <div className="flex">
                    <input

                        className="text-xs px-[2px] w-[2rem] border-0 ring-0 text-center outline-none bg-transparent text-white"
                        value={numero}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        onChange={onChangeAmount}
                    />
                    <Select value={unit} onValueChange={onChangeUnit}>
                        <SelectTrigger className="w-fit  text-white border-0 outline-none focus:outline-none focus:ring-0 px-0">
                            <SelectValue placeholder="Unidad" />
                        </SelectTrigger>
                        <SelectContent className=" text-foreground">
                            <SelectGroup>
                                {units.map((item) => (
                                    <SelectItem key={item} value={item} className="hover:bg-orange-600">
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </PopoverContent>
        </Popover>
    );
}
