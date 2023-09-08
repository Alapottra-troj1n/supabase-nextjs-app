import { create } from 'zustand'

export type Log = {
    date: Date | string,
    note: string,
    hour: number
}

interface LogState {
    log: Log,
    logs: {
        [key: string]: Log
    },
    setLog: (log: Log) => void,
    setDate: (date: Date) => void,
    setLogs: (log: Log, key: string) => void

}

export const useLogStore = create<LogState>()((set) => ({
    log: {
        date: new Date(),
        note: 'note',
        hour: 5
    },
    logs: {},
    setLog: (log: Log) => set((state) => ({ log: { ...state.log, ...log } })),
    setDate: (date: Date) => set(state => ({ log: { ...state.log, date } })),
    setLogs: (log: Log, key: string) => set(state => ({ logs: { ...state.logs, [key]: log } }))
}));

