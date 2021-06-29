import React from 'react';
import {AboutWrapper} from './AboutWrapper';
import {Page1} from './Page1';
import {Page2} from './Page2';

export const moduleName = "Mleko"

export const aboutUsRoute = {
    component: AboutWrapper,
    path: "/about",
    routes: [
        {
            path: "/about/page-1",
            exact: true,
            component: Page1
        },
        {
            path: "/about/page-2",
            exact: true,
            component: Page2
        },
    ]
}