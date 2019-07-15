import { BankEntry } from '../types'

/*
 * action types
 */
export const ADD_ENTRY = 'ADD_ENTRY'
export const REMOVE_ENTRY = 'REMOVE_ENTRY'
export const SET_ENTRY_ID_TO_REMOVE = 'SET_ENTRY_ID_TO_REMOVE'

interface AddEntryAction {
  type: typeof ADD_ENTRY
  payload: BankEntry
}

interface RemoveEntryAction {
  type: typeof REMOVE_ENTRY
  id: string
}

export interface SetEntryIdToRemoveAction {
  type: typeof SET_ENTRY_ID_TO_REMOVE
  id: string
}

export type BankEntryActionTypes = AddEntryAction | RemoveEntryAction | SetEntryIdToRemoveAction

/*
 * action creators
 */
export function addEntry(entry: BankEntry): BankEntryActionTypes {
  return { type: ADD_ENTRY, payload: entry }
}

export function removeEntry(id: string): BankEntryActionTypes {
  return { type: REMOVE_ENTRY, id }
}

export function setEntryIdToRemove(id: string): BankEntryActionTypes {
  return { type: SET_ENTRY_ID_TO_REMOVE, id }
}
