import React from "react"
import { connect } from "react-redux"
import {filterSelector} from '../store/filterSelectors'
import { setFilterAction } from "../store/filterAction"

export function TodoFilter ({value, onChange}){
    return <div className='position marginTop'>
        <button className="button" disabled={value==null} onClick={() => onChange(null)}>Aucun filtre</button>
        <button className="button" disabled={value==true} onClick={() => onChange(true )}>Complété</button>
        <button className="button" disabled={value==false} onClick={() => onChange(false)}>A faire</button>
    </div>
}

export const TodoFilterStore = connect(
    state => ({
        value: filterSelector(state)
    }),
    dispatch => ({
        onChange: (value) => dispatch(setFilterAction(value))
    })
)(TodoFilter)