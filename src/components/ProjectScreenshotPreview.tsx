import React, { useState } from 'react';

interface ProjectScreenshotPreviewProps {
  projectId: string;
  isModal?: boolean;
}

export const ProjectScreenshotPreview: React.FC<ProjectScreenshotPreviewProps> = ({
  projectId,
  isModal = false,
}) => {
  const [erpTab, setErpTab] = useState<'reports' | 'charts' | 'side-by-side'>('side-by-side');

  // 1. Parking System Capstone Project (HogPinApp / My Blazor App) - Screenshot 2026-09-14 180254.png
  if (projectId === 'parking-capstone') {
    return (
      <div className={`w-full bg-[#f8f9fa] border border-[#d2d6dc] rounded-lg overflow-hidden font-sans select-none ${isModal ? 'text-xs md:text-sm' : 'text-[10px]'}`}>
        {/* Top Navbar */}
        <div className="bg-[#1a1a1f] text-white px-3 py-1.5 flex items-center justify-between border-b border-[#2d2d33]">
          <span className="font-semibold text-[11px] md:text-xs tracking-tight">My Blazor App</span>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-[10px] text-zinc-200">
              <span className="text-purple-400">📍</span> George
            </span>
            <span className="bg-[#c92a2a] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-xs">
              Logout
            </span>
          </div>
        </div>

        {/* Body with Sidebar & Content */}
        <div className="flex min-h-[170px] md:min-h-[220px]">
          {/* Left Dark Sidebar */}
          <div className="w-[85px] sm:w-[110px] bg-[#1d1838] text-white p-2 flex flex-col gap-1 shrink-0 border-r border-[#2a244d]">
            <div className="font-bold text-[10px] sm:text-xs text-white mb-2 px-1 tracking-tight">
              HogPinApp
            </div>
            <div className="text-[9px] text-zinc-300 py-0.5 px-1.5 flex items-center gap-1 hover:bg-[#2e2656] rounded">
              <span>🏠</span> Home
            </div>
            <div className="text-[9px] text-zinc-300 py-0.5 px-1.5 flex items-center gap-1 hover:bg-[#2e2656] rounded">
              <span>➔</span> Login
            </div>
            <div className="text-[9px] text-zinc-300 py-0.5 px-1.5 flex items-center gap-1 hover:bg-[#2e2656] rounded">
              <span>👤</span> Profile
            </div>
            <div className="text-[9px] text-zinc-300 py-0.5 px-1.5 flex items-center gap-1 hover:bg-[#2e2656] rounded">
              <span>📅</span> Create Res.
            </div>
            <div className="text-[9px] text-zinc-300 py-0.5 px-1.5 flex items-center gap-1 hover:bg-[#2e2656] rounded">
              <span>🕒</span> Res. History
            </div>
            <div className="text-[9px] bg-[#54467c] text-white font-medium py-1 px-1.5 rounded flex items-center gap-1 shadow-xs">
              <span>📍</span> Lot Info
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="flex-1 bg-white p-2.5 sm:p-3 overflow-hidden">
            <h4 className="text-[13px] sm:text-sm font-bold text-zinc-900 mb-1.5">
              Lot Availability for Today
            </h4>

            {/* Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-[9px] sm:text-[10px] border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 text-zinc-700 font-semibold">
                    <th className="py-0.5 pr-1">Lot</th>
                    <th className="py-0.5 pr-1">Total Spots</th>
                    <th className="py-0.5 pr-1">Reserved</th>
                    <th className="py-0.5 pr-1">Available</th>
                    <th className="py-0.5">Location</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-800">
                  <tr className="border-b border-zinc-100">
                    <td className="py-0.5 font-bold">A</td>
                    <td>50</td>
                    <td>0</td>
                    <td className="text-emerald-600 font-bold">• 50</td>
                    <td className="text-zinc-600">BudWalton - Lot60</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="py-0.5 font-bold">B</td>
                    <td>50</td>
                    <td>0</td>
                    <td className="text-emerald-600 font-bold">• 50</td>
                    <td className="text-zinc-600">Stadium - Lot44</td>
                  </tr>
                  <tr>
                    <td className="py-0.5 font-bold">C</td>
                    <td>50</td>
                    <td>0</td>
                    <td className="text-emerald-600 font-bold">• 50</td>
                    <td className="text-zinc-600">TrackField - Lot74</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-1.5 my-2">
              <span className="bg-[#386bb8] text-white text-[8px] sm:text-[9px] px-2 py-0.5 rounded font-medium shadow-2xs">
                🏀 View Basketball Schedule
              </span>
              <span className="bg-[#417c4f] text-white text-[8px] sm:text-[9px] px-2 py-0.5 rounded font-medium shadow-2xs">
                🏈 View Football Schedule
              </span>
              <span className="bg-[#5c6974] text-white text-[8px] sm:text-[9px] px-2 py-0.5 rounded font-medium shadow-2xs">
                🛞 Parking Info & Rules
              </span>
            </div>

            {/* 3 Campus Lot Cards */}
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {/* Lot A: Bud Walton Arena */}
              <div className="rounded border border-zinc-200 overflow-hidden bg-zinc-50 flex flex-col">
                <div className="h-12 sm:h-16 bg-gradient-to-tr from-[#9e3328] via-[#bd4d3f] to-[#457b9d] relative flex items-center justify-center text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px]"></div>
                  <span className="text-[8px] sm:text-[9px] font-bold z-10 text-center px-1 drop-shadow-md">Bud Walton Arena</span>
                </div>
                <div className="p-1 text-center">
                  <div className="font-bold text-[9px] text-zinc-900">Lot A</div>
                  <div className="text-[8px] text-blue-600 underline">Directions</div>
                </div>
              </div>

              {/* Lot B: Razorback Stadium */}
              <div className="rounded border border-zinc-200 overflow-hidden bg-zinc-50 flex flex-col">
                <div className="h-12 sm:h-16 bg-gradient-to-tr from-[#780000] to-[#c1121f] relative flex flex-col justify-end p-1 text-white overflow-hidden">
                  <div className="text-[6px] sm:text-[7px] leading-tight font-bold bg-black/60 p-0.5 rounded">
                    Lot 44 vacated 5:30pm Fri before game
                  </div>
                </div>
                <div className="p-1 text-center">
                  <div className="font-bold text-[9px] text-zinc-900">Lot B</div>
                  <div className="text-[8px] text-blue-600 underline">Directions</div>
                </div>
              </div>

              {/* Lot C: Track & Field */}
              <div className="rounded border border-zinc-200 overflow-hidden bg-zinc-50 flex flex-col">
                <div className="h-12 sm:h-16 bg-gradient-to-tr from-[#2d6a4f] via-[#52b788] to-[#ffb703] relative flex items-center justify-center text-white overflow-hidden">
                  <span className="text-[8px] sm:text-[9px] font-bold z-10 text-center px-1 drop-shadow-md">Track & Field</span>
                </div>
                <div className="p-1 text-center">
                  <div className="font-bold text-[9px] text-zinc-900">Lot C</div>
                  <div className="text-[8px] text-blue-600 underline">Directions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. SQL Database Normalization (Database Diagram for Construction Warehouse - 3NF)
  if (projectId === 'sql-normalization') {
    return (
      <div className={`w-full bg-[#f4f7fa] border border-[#d0d7de] rounded-lg p-2 sm:p-3 font-mono text-[9px] sm:text-[10px] select-none ${isModal ? 'min-h-[280px]' : 'min-h-[190px]'}`}>
        <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#dae2fd]">
          <span className="font-sans font-bold text-[#006398] flex items-center gap-1">
            <span>🗂</span> Construction Warehouse 3NF Relational Schema
          </span>
          <span className="text-[8px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-sans font-semibold">
            BCNF / 3NF Verified
          </span>
        </div>

        {/* ERD Diagrams Grid */}
        <div className="grid grid-cols-3 gap-2">
          {/* Table 1: tbl_Employee */}
          <div className="bg-white rounded border border-[#b8c9e8] shadow-2xs overflow-hidden">
            <div className="bg-[#006398] text-white px-1.5 py-0.5 font-bold text-[9px] flex justify-between">
              <span>tbl_Employee</span>
              <span className="text-sky-200 font-sans text-[8px]">1</span>
            </div>
            <div className="p-1 space-y-0.5">
              <div className="text-[#9d0208] font-bold flex items-center gap-1">
                <span>🔑</span> PK EmpID
              </div>
              <div className="text-zinc-700">LastName</div>
              <div className="text-zinc-700">FirstName</div>
              <div className="text-zinc-500">RoleTitle</div>
            </div>
          </div>

          {/* Table 2: tbl_Project */}
          <div className="bg-white rounded border border-[#b8c9e8] shadow-2xs overflow-hidden">
            <div className="bg-[#006398] text-white px-1.5 py-0.5 font-bold text-[9px] flex justify-between">
              <span>tbl_Project</span>
              <span className="text-sky-200 font-sans text-[8px]">1</span>
            </div>
            <div className="p-1 space-y-0.5">
              <div className="text-[#9d0208] font-bold flex items-center gap-1">
                <span>🔑</span> PK ProjectID
              </div>
              <div className="text-zinc-700">ProjectName</div>
              <div className="text-zinc-700">StartDate</div>
              <div className="text-zinc-500">BudgetEst</div>
            </div>
          </div>

          {/* Table 3: tbl_Client */}
          <div className="bg-white rounded border border-[#b8c9e8] shadow-2xs overflow-hidden">
            <div className="bg-[#006398] text-white px-1.5 py-0.5 font-bold text-[9px] flex justify-between">
              <span>tbl_Client</span>
              <span className="text-sky-200 font-sans text-[8px]">1</span>
            </div>
            <div className="p-1 space-y-0.5">
              <div className="text-[#9d0208] font-bold flex items-center gap-1">
                <span>🔑</span> PK ClientID
              </div>
              <div className="text-zinc-700">ClientName</div>
              <div className="text-zinc-700">ContactPhone</div>
              <div className="text-zinc-500">BillingRegion</div>
            </div>
          </div>
        </div>

        {/* Connecting Rows */}
        <div className="flex items-center justify-center my-1 text-[#006398] font-sans text-[9px] gap-4">
          <span>↓ 1-to-Many Relational FK Constraints ↓</span>
        </div>

        {/* Bottom Row: Junction & Warehouse */}
        <div className="grid grid-cols-2 gap-2">
          {/* Table 4: tbl_Assignment (Junction) */}
          <div className="bg-white rounded border border-[#0a1e3a] shadow-2xs overflow-hidden">
            <div className="bg-[#0a1e3a] text-white px-1.5 py-0.5 font-bold text-[9px] flex justify-between">
              <span>tbl_Assignment</span>
              <span className="text-emerald-300 font-sans text-[8px]">∞</span>
            </div>
            <div className="p-1 space-y-0.5">
              <div className="text-[#9d0208] font-bold">🔑 PK AssignID</div>
              <div className="text-[#006398] font-semibold">🔗 FK EmpID</div>
              <div className="text-[#006398] font-semibold">🔗 FK ProjectID</div>
              <div className="text-zinc-700">HoursLogged (Dec)</div>
            </div>
          </div>

          {/* Table 5: tbl_WarehouseInventory */}
          <div className="bg-white rounded border border-[#0a1e3a] shadow-2xs overflow-hidden">
            <div className="bg-[#0a1e3a] text-white px-1.5 py-0.5 font-bold text-[9px] flex justify-between">
              <span>tbl_WarehouseInventory</span>
              <span className="text-emerald-300 font-sans text-[8px]">∞</span>
            </div>
            <div className="p-1 space-y-0.5">
              <div className="text-[#9d0208] font-bold">🔑 PK ItemID</div>
              <div className="text-[#006398] font-semibold">🔗 FK WarehouseLoc</div>
              <div className="text-zinc-700">StockOnHand (Qty)</div>
              <div className="text-zinc-500">SafetyStockReorder</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. ERP Simulation Team Project (Screenshot 2026-09-14 182356.png & 182419.png)
  if (projectId === 'erp-simulation') {
    return (
      <div className="w-full bg-white border border-[#d2d6dc] rounded-lg overflow-hidden font-sans select-none">
        {/* Toggle bar if in modal or card */}
        {isModal && (
          <div className="bg-[#f0f4f8] px-3 py-1.5 border-b border-zinc-200 flex items-center justify-between text-xs">
            <span className="font-bold text-zinc-800">ERP Game Simulation System</span>
            <div className="flex gap-1">
              <button
                onClick={() => setErpTab('reports')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium cursor-pointer ${erpTab === 'reports' ? 'bg-[#006398] text-white' : 'bg-white text-zinc-700'}`}
              >
                Market & Inventory Reports
              </button>
              <button
                onClick={() => setErpTab('charts')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium cursor-pointer ${erpTab === 'charts' ? 'bg-[#006398] text-white' : 'bg-white text-zinc-700'}`}
              >
                Price & Stock Analytics
              </button>
              <button
                onClick={() => setErpTab('side-by-side')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium cursor-pointer ${erpTab === 'side-by-side' ? 'bg-[#006398] text-white' : 'bg-white text-zinc-700'}`}
              >
                Side-by-Side View
              </button>
            </div>
          </div>
        )}

        <div className={`grid ${erpTab === 'side-by-side' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} divide-y md:divide-y-0 md:divide-x divide-zinc-200`}>
          {/* Panel A: Market & Inventory Reports (Screenshot 2026-09-14 182356.png) */}
          {(erpTab === 'reports' || erpTab === 'side-by-side') && (
            <div className="p-2 sm:p-2.5 text-[8.5px] sm:text-[9.5px]">
              {/* Market Report Header */}
              <div className="font-bold text-zinc-800 mb-1 flex items-center justify-between">
                <span>Market Report : Round 04 Day 13</span>
                <span className="text-[7.5px] text-zinc-500 font-normal">🔍 ☰ ▽ Σ 🖨 ⤢</span>
              </div>
              <div className="overflow-x-auto border border-zinc-200 rounded">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-zinc-50 text-zinc-700 border-b border-zinc-200">
                    <tr>
                      <th className="p-0.5">Date</th>
                      <th className="p-0.5">Material Description</th>
                      <th className="p-0.5">Area</th>
                      <th className="p-0.5">Qty</th>
                      <th className="p-0.5">Value</th>
                      <th className="p-0.5">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-zinc-700 font-mono text-[8px]">
                    <tr>
                      <td className="p-0.5 text-blue-700">04/10</td>
                      <td className="p-0.5 font-sans font-medium text-zinc-900">1kg Blueberry Muesli</td>
                      <td className="p-0.5 font-sans">North</td>
                      <td className="p-0.5">34,055</td>
                      <td className="p-0.5">230,046</td>
                      <td className="p-0.5">$6.76</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className="p-0.5 font-sans">South</td>
                      <td className="p-0.5">30,806</td>
                      <td className="p-0.5">209,103</td>
                      <td className="p-0.5">$6.79</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="p-0.5 font-sans font-medium text-zinc-900">1kg Nut Muesli</td>
                      <td className="p-0.5 font-sans">North</td>
                      <td className="p-0.5">34,490</td>
                      <td className="p-0.5">216,709</td>
                      <td className="p-0.5">$6.28</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="p-0.5 font-sans font-medium text-zinc-900">1kg Strawberry Muesli</td>
                      <td className="p-0.5 font-sans">West</td>
                      <td className="p-0.5">43,107</td>
                      <td className="p-0.5">310,022</td>
                      <td className="p-0.5">$7.19</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Inventory Report */}
              <div className="font-bold text-zinc-800 mt-2 mb-1">
                Inventory Report : Round 04 Day 13
              </div>
              <div className="overflow-x-auto border border-zinc-200 rounded">
                <table className="w-full text-left border-collapse text-[8px] font-mono">
                  <thead className="bg-zinc-50 text-zinc-700 border-b border-zinc-200 font-sans">
                    <tr>
                      <th className="p-0.5">Location</th>
                      <th className="p-0.5">Material</th>
                      <th className="p-0.5">Description</th>
                      <th className="p-0.5">Stock</th>
                      <th className="p-0.5">Base Unit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-zinc-700">
                    <tr>
                      <td className="p-0.5 text-blue-700">02</td>
                      <td className="p-0.5">OO-F11</td>
                      <td className="p-0.5 font-sans">1kg Nut Muesli</td>
                      <td className="p-0.5 font-bold text-emerald-700">88,380</td>
                      <td className="p-0.5">ST</td>
                    </tr>
                    <tr>
                      <td className="p-0.5">02</td>
                      <td className="p-0.5">OO-F12</td>
                      <td className="p-0.5 font-sans">1kg Blueberry Muesli</td>
                      <td className="p-0.5 font-bold text-emerald-700">64,446</td>
                      <td className="p-0.5">ST</td>
                    </tr>
                    <tr>
                      <td className="p-0.5">02</td>
                      <td className="p-0.5">OO-F13</td>
                      <td className="p-0.5 font-sans">1kg Strawberry Muesli</td>
                      <td className="p-0.5 font-bold text-emerald-700">44,749</td>
                      <td className="p-0.5">ST</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Panel B: Price & Inventory Balance Analytics (Screenshot 2026-09-14 182419.png) */}
          {(erpTab === 'charts' || erpTab === 'side-by-side') && (
            <div className="p-2 sm:p-2.5 flex flex-col justify-between space-y-2 bg-[#fdfdfd]">
              {/* Chart 1: Average of PRICE */}
              <div>
                <div className="text-[7.5px] sm:text-[8.5px] text-zinc-600 font-semibold mb-0.5">
                  Average of PRICE by MATERIAL_DESCRIPTION and SIM_DATE
                </div>
                <div className="h-14 sm:h-18 w-full bg-white border border-zinc-200 rounded p-1 relative flex items-end">
                  {/* Stepped price line SVG */}
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                    <path
                      d="M 0,10 L 60,10 L 70,35 L 75,55 L 85,55 L 90,30 L 140,30 L 145,35 L 150,15 L 165,10 L 175,25 L 200,25"
                      fill="none"
                      stroke="#2b7cd3"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="flex justify-between text-[7px] text-zinc-400 font-mono mt-0.5">
                  <span>1kg Blueberry</span>
                  <span>1kg Nut</span>
                  <span>1kg Strawberry</span>
                </div>
              </div>

              {/* Chart 2: Inventory Opening Balance */}
              <div>
                <div className="text-[7.5px] sm:text-[8.5px] text-zinc-600 font-semibold mb-0.5">
                  Sum of INVENTORY_OPENING_BALANCE by SIM_DATE
                </div>
                <div className="h-16 sm:h-20 w-full bg-white border border-zinc-200 rounded p-1 flex items-end justify-between gap-[2px]">
                  {[8, 5, 4, 3, 2, 6, 22, 42, 53, 44, 43, 38, 32, 30, 20, 7, 24, 60, 44, 33, 27, 23, 39, 56, 29, 26, 19, 40, 62, 68, 66, 81, 92, 110, 116, 110, 18, 30, 45, 63, 75, 60, 56, 32, 28, 22, 9, 5, 8, 29, 24, 24, 18, 11, 8].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${(h / 120) * 100}%` }}
                      className="bg-[#4a8fe7] w-full min-w-[1px] rounded-t-[1px]"
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[7px] text-zinc-400 font-mono mt-0.5">
                  <span>0k</span>
                  <span>Peak: 116k Units</span>
                  <span>SIM_DATE</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 4. BI Data Analysis (Engagement of Emails of Loyalty Members) - Screenshot 2026-09-14 181608.png
  if (projectId === 'bi-data-analysis') {
    return (
      <div className={`w-full bg-white border border-[#d2d6dc] rounded-lg p-2.5 sm:p-3 font-sans select-none ${isModal ? 'min-h-[260px]' : 'min-h-[190px]'}`}>
        <div className="flex items-center justify-between mb-1.5">
          <span className="bg-[#e4e7eb] border border-[#cbd2d9] text-zinc-700 text-[9px] font-semibold px-2 py-0.5 rounded shadow-2xs">
            Email Engagement
          </span>
          <span className="text-[11px] sm:text-xs font-bold text-zinc-700">
            Engagement of Emails of Loyalty Members
          </span>
          <div></div>
        </div>

        {/* Chart area with Y-axis and Bars */}
        <div className="flex items-stretch gap-2 mt-2">
          {/* Y Axis Numbers */}
          <div className="flex flex-col justify-between text-[7.5px] sm:text-[8px] text-zinc-400 font-mono text-right pr-1 border-r border-zinc-200 w-10">
            <span>500000</span>
            <span>400000</span>
            <span>300000</span>
            <span>200000</span>
            <span>100000</span>
            <span>0</span>
          </div>

          {/* Groups of Bars */}
          <div className="flex-1 flex justify-around items-end h-28 sm:h-36 pt-2 pb-0 relative border-b border-zinc-300">
            {/* Horizontal Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-b border-zinc-400 w-full"></div>
              <div className="border-b border-zinc-400 w-full"></div>
              <div className="border-b border-zinc-400 w-full"></div>
              <div className="border-b border-zinc-400 w-full"></div>
              <div className="border-b border-zinc-400 w-full"></div>
            </div>

            {/* Female Cluster */}
            <div className="flex flex-col items-center z-10">
              <div className="flex items-end gap-1 h-24 sm:h-32">
                <div title="1 Year: 175,000" className="w-3.5 sm:w-5 bg-[#255f85] rounded-t-xs h-[35%]"></div>
                <div title="2 Years: 265,000" className="w-3.5 sm:w-5 bg-[#d96e27] rounded-t-xs h-[53%]"></div>
                <div title="3 Years: 445,000" className="w-3.5 sm:w-5 bg-[#286e2d] rounded-t-xs h-[89%]"></div>
              </div>
              <span className="text-[9px] font-semibold text-zinc-700 mt-1">Female</span>
            </div>

            {/* Male Cluster */}
            <div className="flex flex-col items-center z-10">
              <div className="flex items-end gap-1 h-24 sm:h-32">
                <div title="1 Year: 135,000" className="w-3.5 sm:w-5 bg-[#255f85] rounded-t-xs h-[27%]"></div>
                <div title="2 Years: 210,000" className="w-3.5 sm:w-5 bg-[#d96e27] rounded-t-xs h-[42%]"></div>
                <div title="3 Years: 350,000" className="w-3.5 sm:w-5 bg-[#286e2d] rounded-t-xs h-[70%]"></div>
              </div>
              <span className="text-[9px] font-semibold text-zinc-700 mt-1">Male</span>
            </div>

            {/* Other Cluster */}
            <div className="flex flex-col items-center z-10">
              <div className="flex items-end gap-1 h-24 sm:h-32">
                <div title="1 Year: 90,000" className="w-3.5 sm:w-5 bg-[#255f85] rounded-t-xs h-[18%]"></div>
                <div title="2 Years: 130,000" className="w-3.5 sm:w-5 bg-[#d96e27] rounded-t-xs h-[26%]"></div>
                <div title="3 Years: 220,000" className="w-3.5 sm:w-5 bg-[#286e2d] rounded-t-xs h-[44%]"></div>
              </div>
              <span className="text-[9px] font-semibold text-zinc-700 mt-1">Other</span>
            </div>
          </div>

          {/* Legend */}
          <div className="w-24 sm:w-28 pl-2 flex flex-col justify-center text-[8px] sm:text-[9px] text-zinc-700">
            <div className="bg-zinc-100 border border-zinc-200 px-1 py-0.5 rounded font-semibold text-zinc-600 mb-1 flex items-center justify-between">
              <span># Loyalty Years</span>
              <span>▼</span>
            </div>
            <div className="flex items-center gap-1 py-0.5">
              <span className="w-2.5 h-2.5 bg-[#255f85]"></span>
              <span>1 Year</span>
            </div>
            <div className="flex items-center gap-1 py-0.5">
              <span className="w-2.5 h-2.5 bg-[#d96e27]"></span>
              <span>2 Years</span>
            </div>
            <div className="flex items-center gap-1 py-0.5">
              <span className="w-2.5 h-2.5 bg-[#286e2d]"></span>
              <span>3 Years</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 pt-1">
          <span className="bg-[#e4e7eb] border border-[#cbd2d9] text-zinc-700 text-[8.5px] font-semibold px-2 py-0.5 rounded">
            Gender ▼
          </span>
          <span className="text-[8px] text-zinc-400 italic">Tableau / Power BI Star Schema</span>
        </div>
      </div>
    );
  }

  // 5. ATM UI Team Project (Screenshot 2026-09-14 180753.png - Planning: Non-Functional Prototype)
  if (projectId === 'atm-ui') {
    return (
      <div className={`w-full bg-[#d0d0d5] border border-[#b0b0b8] rounded-lg overflow-hidden font-sans select-none ${isModal ? 'min-h-[260px]' : 'min-h-[190px]'}`}>
        {/* Banner Header */}
        <div className="bg-white px-3 py-1.5 flex items-center justify-between border-b-2 border-zinc-900">
          <span className="font-extrabold text-[12px] sm:text-sm text-zinc-900 tracking-tight">
            Planning: Non-Functional Prototype
          </span>
          {/* Hog Bank Round Emblem */}
          <div className="w-8 h-8 rounded-full border-2 border-zinc-800 flex flex-col items-center justify-center text-[5px] font-extrabold text-zinc-800 leading-none">
            <span>HOG BANK</span>
            <span className="text-[#9d0208] text-[7px]">🐗</span>
            <span>EST. 2024</span>
          </div>
        </div>

        {/* 5 Classic WinForms Mockup Windows */}
        <div className="p-2 grid grid-cols-3 gap-1.5">
          {/* Form 1: Welcome Screen */}
          <div className="bg-[#c29690] border border-zinc-700 rounded-t-xs shadow-2xs overflow-hidden">
            <div className="bg-zinc-200 px-1 py-0.5 text-[7px] text-zinc-800 flex justify-between border-b border-zinc-400">
              <span>Hog Bank</span>
              <span>_ □ ✕</span>
            </div>
            <div className="p-1 text-center">
              <div className="font-serif text-[7.5px] font-bold text-zinc-900 leading-tight">
                Welcome to Hog Bank!
              </div>
              <div className="text-[12px] my-0.5 text-[#780000]">🐗</div>
              <div className="text-[6.5px] text-zinc-800 font-serif">
                Please Insert or Tap Your Card
              </div>
            </div>
          </div>

          {/* Form 2: Enter PIN */}
          <div className="bg-[#c9ddf5] border border-zinc-700 rounded-t-xs shadow-2xs overflow-hidden">
            <div className="bg-zinc-200 px-1 py-0.5 text-[7px] text-zinc-800 flex justify-between border-b border-zinc-400">
              <span>Form2</span>
              <span>_ □ ✕</span>
            </div>
            <div className="p-1 text-center">
              <div className="font-serif text-[7.5px] font-bold text-zinc-900">
                Please Enter Your Pin
              </div>
              <div className="bg-white border border-zinc-400 text-[8px] font-mono font-bold tracking-widest my-0.5 py-0.5">
                * * * *
              </div>
              <div className="grid grid-cols-3 gap-[1px] max-w-[60px] mx-auto text-[6.5px] font-mono font-bold">
                <span className="bg-zinc-100 p-0.5 border border-zinc-300">1</span>
                <span className="bg-zinc-100 p-0.5 border border-zinc-300">2</span>
                <span className="bg-zinc-100 p-0.5 border border-zinc-300">3</span>
                <span className="bg-zinc-100 p-0.5 border border-zinc-300">4</span>
                <span className="bg-zinc-100 p-0.5 border border-zinc-300">5</span>
                <span className="bg-red-500 text-white p-0.5">CAN</span>
                <span className="bg-zinc-100 p-0.5 border border-zinc-300">7</span>
                <span className="bg-amber-400 p-0.5">CLR</span>
                <span className="bg-emerald-600 text-white p-0.5">ENT</span>
              </div>
            </div>
          </div>

          {/* Form 3: Select Account */}
          <div className="bg-[#c29690] border border-zinc-700 rounded-t-xs shadow-2xs overflow-hidden">
            <div className="bg-zinc-200 px-1 py-0.5 text-[7px] text-zinc-800 flex justify-between border-b border-zinc-400">
              <span>Form3</span>
              <span>_ □ ✕</span>
            </div>
            <div className="p-1 text-center">
              <div className="font-serif text-[7.5px] font-bold text-zinc-900">
                Welcome, (NAME)!
              </div>
              <div className="space-y-0.5 my-1">
                <div className="bg-[#7da8d4] text-white text-[6.5px] font-bold py-0.5 rounded-xs">
                  Checking 1234....
                </div>
                <div className="bg-[#7da8d4] text-white text-[6.5px] font-bold py-0.5 rounded-xs">
                  Savings 5678...
                </div>
              </div>
              <div className="bg-[#d9534f] text-white text-[6px] font-bold w-6 ml-auto rounded-xs">
                Exit
              </div>
            </div>
          </div>

          {/* Form 4: Select Transaction */}
          <div className="bg-[#c29690] border border-zinc-700 rounded-t-xs shadow-2xs overflow-hidden col-span-1">
            <div className="bg-zinc-200 px-1 py-0.5 text-[7px] text-zinc-800 flex justify-between border-b border-zinc-400">
              <span>Form4</span>
              <span>_ □ ✕</span>
            </div>
            <div className="p-1 text-center">
              <div className="font-serif text-[7px] font-bold text-zinc-900">
                Select Transaction
              </div>
              <div className="space-y-0.5 my-0.5">
                <div className="bg-[#7da8d4] text-white text-[6px] font-bold">Deposit</div>
                <div className="bg-[#7da8d4] text-white text-[6px] font-bold">Withdrawl</div>
                <div className="bg-[#7da8d4] text-white text-[6px] font-bold">Inquiry</div>
              </div>
            </div>
          </div>

          {/* Form 5: Thank You Screen */}
          <div className="bg-[#c29690] border border-zinc-700 rounded-t-xs shadow-2xs overflow-hidden col-span-2">
            <div className="bg-zinc-200 px-1 py-0.5 text-[7px] text-zinc-800 flex justify-between border-b border-zinc-400">
              <span>Form5</span>
              <span>_ □ ✕</span>
            </div>
            <div className="p-1 text-center">
              <div className="font-serif text-[7.5px] font-bold text-zinc-900">
                Thank You for Choosing Hog Bank!
              </div>
              <div className="text-[10px] text-[#780000]">🐗</div>
              <div className="text-[6.5px] font-serif text-zinc-800">
                Transaction Completed • Please Take Your Receipt
              </div>
            </div>
          </div>
        </div>

        {/* Crimson Footer */}
        <div className="bg-[#6b0202] text-white px-3 py-0.5 text-[7px] flex justify-between font-mono">
          <span>SAMPLE FOOTER TEXT</span>
          <span>10</span>
        </div>
      </div>
    );
  }

  // 6. Currency Conversion Program (Screenshot 2026-09-14 182914.png - tk window)
  if (projectId === 'currency-converter') {
    return (
      <div className={`w-full bg-[#f0f0f0] border border-[#a0a0a0] rounded-lg overflow-hidden font-sans select-none ${isModal ? 'min-h-[220px]' : 'min-h-[190px]'}`}>
        {/* Windows 11 Tkinter Titlebar */}
        <div className="bg-white px-3 py-1 flex items-center justify-between border-b border-[#e5e5e5]">
          <div className="flex items-center gap-1.5">
            {/* Feather Logo */}
            <span className="text-teal-600 text-xs">🪶</span>
            <span className="text-[11px] font-medium text-zinc-800">tk</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-600 text-[10px] font-mono">
            <span>—</span>
            <span>□</span>
            <span className="text-zinc-800 font-bold hover:text-red-600">✕</span>
          </div>
        </div>

        {/* Python Tkinter Form Fields */}
        <div className="p-3 space-y-2.5 text-xs text-zinc-900">
          {/* Select Currency */}
          <div className="flex items-center justify-between gap-2">
            <label className="text-[11px] font-normal text-zinc-900">Select Currency:</label>
            <div className="w-48 bg-white border border-[#7a7a7a] px-2 py-0.5 rounded-xs flex items-center justify-between text-[11px]">
              <span>&#123;United Kingdom&#125;</span>
              <span className="text-[8px] text-zinc-500">▼</span>
            </div>
          </div>

          {/* Enter Amount in USD */}
          <div className="flex items-center justify-between gap-2">
            <label className="text-[11px] font-normal text-zinc-900">Enter amount in USD:</label>
            <div className="w-48 bg-white border border-[#7a7a7a] px-2 py-0.5 rounded-xs text-[11px] font-mono">
              100
            </div>
          </div>

          {/* Convert Button */}
          <div className="flex justify-center pt-0.5">
            <button className="bg-[#e1e1e1] hover:bg-[#d0d0d0] border border-[#adadad] px-4 py-0.5 rounded-xs text-[11px] font-normal shadow-xs text-zinc-900">
              Convert
            </button>
          </div>

          {/* Result Field */}
          <div className="flex items-start justify-between gap-2 pt-1">
            <label className="text-[11px] font-normal text-zinc-900 pt-1">Result:</label>
            <div className="w-48 h-12 bg-white border border-[#7a7a7a] p-1.5 font-mono text-[11px] text-zinc-900 leading-snug">
              100 USD = 80.80 Pound
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
