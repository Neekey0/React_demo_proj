export const actionTypes = 
{
    SET_EMP_FORM_VALUES:"SET_EMP_FORM_VALUES",
    SET_EMP_QUALIFICATION_VALUES:"SET_EMP_QUALIFICATION_VALUES",
    SAVE_QUALIFICATIONS:"SAVE_QUALIFICATIONS",
    SAVE_EMP_DETAILS:"SAVE_EMP_DETAILS",
    RESET_FORM:"RESET_FORM",
    EDIT_QUALIFICATIONS:'EDIT_QUALIFICATIONS',
    REMOVE_QUALIFICATIONS:'REMOVE_QUALIFICATIONS',
    REMOVE_DETAILS:'REMOVE_DETAILS',
    EDIT_DETAILS:'EDIT_DETAILS'
}
export const SetEmpFormValues =(data)=>
{
    return{
        type:actionTypes.SET_EMP_FORM_VALUES,
        data
    }
}
export const SetEmpQualificationValues =(data)=>{
    return{
        type:actionTypes.SET_EMP_QUALIFICATION_VALUES,
        data
    }
}

export const SaveQualifications=(data)=>{
    return{
        type:actionTypes.SAVE_QUALIFICATIONS,
        data
    }
}

export const SaveEmpDetail=(data)=>{
    return{
        type:actionTypes.SAVE_EMP_DETAILS,
        data
    }
}

export const ResetForm=()=>{
    return{
        type:actionTypes.RESET_FORM
    }
}

export const EditQualification=(data)=>{
    return{
        type:actionTypes.EDIT_QUALIFICATIONS,
        data
    }
}

export const RemoveQualification=(data)=>{
    return{
        type:actionTypes.REMOVE_QUALIFICATIONS,
        data
    }
}

export const RemoveDetails=(data)=>{
    return{
        type:actionTypes.REMOVE_DETAILS,
        data
    }
}

export const EditDetails=(data)=>{
    return{
        type:actionTypes.EDIT_DETAILS,
        data
    }
}
// export const UpdateDetails=(data)=>{
//     return{
//         type:actionTypes.UPDATE_DETAILS,
//         data
//     }
// }