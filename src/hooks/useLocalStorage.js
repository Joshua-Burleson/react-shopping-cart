import React, { useState } from 'react';

export const useLocalStorage = (key, initVal) => {

    const updateStorage = newVal => {
        localStorage.setItem(key, JSON.stringify(newVal));
        return JSON.parse(localStorage.getItem(key));
    }
    
    const [value, setValue] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : updateStorage(initVal));

    const updateValue = newVal => {
        setValue(updateStorage(newVal));
    };

    return [value, updateValue];
}