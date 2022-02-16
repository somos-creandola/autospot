import React from "react";
import { DivSelect, SelectSidebar, Sidebar } from "../Styles/Styles";

export const SidebarWebsite = () => {
    return (
        <Sidebar className="py-3 px-4">
            <div className="sidebar-header">
                <h3>Filtrar</h3>
            </div>
            <div className="sidebar-dropdowns">
                <div className="filter-content">
                    <label>Name filter</label>
                    <DivSelect>
                        <SelectSidebar className="form-control">
                            <option>Seleccione un modelo</option>
                        </SelectSidebar>
                    </DivSelect>
                </div>
                <div className="filter-content">
                    <label>Name filter</label>
                    <SelectSidebar className="form-control">
                        <option>Element</option>
                    </SelectSidebar>
                </div>
                <div className="filter-content">
                    <label>Name filter</label>
                    <SelectSidebar className="form-control">
                        <option>Element</option>
                    </SelectSidebar>
                </div>
                <div className="filter-content">
                    <label>Name filter</label>
                    <SelectSidebar className="form-control">
                        <option>Element</option>
                    </SelectSidebar>
                </div>
                <div className="filter-content mb-5">
                    <button>Borrar Filtros</button>
                </div>
            </div>
        </Sidebar>
    );
};
