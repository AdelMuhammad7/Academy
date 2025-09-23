import { Table } from "@/types/adminTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState : Table  = {
  tableData: [],
};

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
    setTableData(state, action) {   // 👈 أكشن جديد
      state.tableData = action.payload;
    },
  },
})

export const { setTableData } = tableSlice.actions;
export default tableSlice.reducer;