'use client'

import Select from "@/styles/Components/Select/Select";
import { useState } from "react";

interface Props {
    data: any;
    onChange: (selectedValue: any) => void;
}

export default function CFPurpose({
    data, onChange
}: Props) {

    const handleValueChange = (selectedValue: any) => {
        onChange(selectedValue);
    };

    return (
        <Select label="사용 목적" value={data} options={["디벨로이드", "디벨플레이"]} onValueChange={handleValueChange}/>
    )

}