import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {hire, worker} from "../configs/menus";

export default function Sidebar({component: Component}) {
    const auth = JSON.parse(localStorage.getItem("auth"));
    let menus;

    if (auth.role === "hire") {
        menus = hire;
    } else if (auth.role === "worker") {
        menus = worker;
    }

    return (<div className="drawer drawer-mobile h-[calc(100vh-64px)]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content flex-col h-full lg:p-12 p-4">
            <Component/>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
                {menus.map((menu, index) => {
                    return (<div key={index}>
                        <li className="mb-2 bg-white dark:bg-[#242930] rounded-lg">
                            <NavLink to={menu.path}>
                                  <span className="material-symbols-rounded">
                                    {menu.icon}
                                  </span>
                                {menu.name}
                            </NavLink>
                        </li>
                        {menu.children && menu.children.map((child, index) => {
                            return (<li
                                key={index}
                                className="mb-2 ml-8 bg-white dark:bg-[#242930] rounded-lg"
                            >
                                <NavLink key={index} to={child?.path}>
                          <span className="material-symbols-rounded">
                            {child.icon}
                          </span>
                                    {child.name}
                                </NavLink>
                            </li>);
                        })}
                    </div>);
                })}
            </ul>
        </div>
    </div>);
}
