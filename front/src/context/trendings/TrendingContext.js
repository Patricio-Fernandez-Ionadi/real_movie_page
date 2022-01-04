import { createContext, useContext } from "react"

export const TrendingsContext = createContext()

export const useTrendingsContext = () => useContext(TrendingsContext)
