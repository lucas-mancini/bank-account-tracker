import { BankEntry } from '../types'

/*
 * action types
 */
export const ADD_ENTRY = 'ADD_ENTRY'
export const REMOVE_ENTRY = 'REMOVE_ENTRY'

/*
 * action creators
 */
export function addEntry(entry: BankEntry) {
  return { type: ADD_ENTRY, entry }
}

export function removeEntry(id: string) {
  return { type: REMOVE_ENTRY, id }
}
