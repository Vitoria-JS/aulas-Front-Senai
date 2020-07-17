"use strict";

const masks = {
    texto        : value => value.replace(/[^a-zA-Z À-ÿ]/,''),
    celular   : value => value.replace (/[^0-9]/g, '')
                                .replace(/(.{2})(.{5})(.{4})/, '($1) $2 - $3')
                                .replace(/(.{17})(.*)/, '$1' ),
    cep         : 'fazer',
    numero      : 'fazer',
                              
};
export const validator = element => {
    element.addEventListener('input', ( event ) => {
        const $input = event.target;
        const typeMask = $input.dataset.type;
        if (masks.hasOwnProperty(typeMask)){
        $input.value = masks[typeMask]($input.value);
        }
    });
};

export const emailValidator = element => {
    element.addEventListener('blur', () => {
        if (!element.value.match (/.*@.*\..*/)){
            alert ("verifique o e-mail!")
        }

    });
}