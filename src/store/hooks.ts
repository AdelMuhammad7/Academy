import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "./store"

// بدل ما تكتب useDispatch<AppDispatch> كل مرة
export const useAppDispatch = () => useDispatch<AppDispatch>()

// بدل ما تكتب useSelector<RootState> كل مرة
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
