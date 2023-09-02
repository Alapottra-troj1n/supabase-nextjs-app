import { create } from 'zustand'

type Log = {
    date: Date,
    note: String,
    hour: Number
}

interface LogState {
    log: Log,
    setLog: (log: Log) => void,
    setDate: (date: Date) => void

}

export const useLogStore = create<LogState>()((set) => ({
    log: {
        date: new Date(),
        note: 'note',
        hour: 5
    },
    setLog: (log: Log) => set((state) => ({ ...state.log, log })),
    setDate: (date: Date) => set(state => ({ log: { ...state.log, date } }))
}))