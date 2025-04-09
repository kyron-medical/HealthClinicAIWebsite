"use client";

import { StrictMode, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

// Define interface for your row data
interface CarData {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<CarData[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<CarData>[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  return (
    // Data Grid will fill the size of the parent container
    <div
      className="ag-theme-alpine"
      style={{ height: 500, width: "100%" }}
      data-oid="ol8fgz3"
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} data-oid="kxjc2dx" />
    </div>
  );
};

export default GridExample;
