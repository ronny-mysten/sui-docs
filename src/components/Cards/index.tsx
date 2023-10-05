import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import Link from '@docusaurus/Link';

export function Card (props) {

    const [h, setH] = useState();
    const location = useLocation();
    const history = useHistory();
    const isHome = location.pathname === "/";
    const isExternal = props.href && props.href.match(/^https?/);

    const handleClick = (href) => { 
        history.push(href);
    }

    let classList = 'w-full font-sans p-4 border border-solid rounded-sui group relative bg-white dark:bg-sui-grey-95 cursor-pointer border-2 border-slate-500 dark:border-slate-300 hover:shadow-slate-600 hover:shadow-sui dark:hover:shadow-slate-400';
    let size = (typeof(props.size) == 'undefined') ? 'sm' : props.size;
 
    classList = [classList, isHome 
            ? 'h-64 items-center align-middle grid grid-cols-3'
            : ''
        ].join(' ');

    return (
        
        <div 
            className={classList}
            onClick={() => handleClick(props.href)}
        >
            <div className={`text-sm text-sui-gray-100 dark:text-slate-400 ${isHome ? "h-full flex items-center" : ""}`}>
                
                <h1 className="text-xl font-bold mr-2 text-sui-blue-darker dark:text-sui-blue">
                    {props.title}
                </h1>
            </div>
            
            <div className={`text-sm p-4 pb-8 ${isHome ? "flex items-center col-span-2 h-full" : ""}`}>
                {props.children}
            </div>
            
        </div>
        
    );
}

export function Cards({ children, ...props }) {
    const location = useLocation();
    let twClassList = location.pathname === "/" 
        ? `gap-16 grid lg:grid-rows-${Math.ceil(children.length/3)} md:grid-rows-${Math.ceil(children.length/2)} lg:grid-cols-3 md:grid-cols-2` 
        : 'gap-8 grid lg:grid-rows-${Math.ceil(children.length/3)} md:grid-rows-${Math.ceil(children.length/2)} lg:grid-cols-3 md:grid-cols-2 justify-start pb-8'
    return (
      <div
        className={twClassList}
        {...props}
      >
        {children}
      </div>
    )
  }


