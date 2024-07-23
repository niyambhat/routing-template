import React from 'react';
import { AboutUs } from '../../views/AboutUs';
import { Contact } from '../../views/Contact';
import { Home } from '../../views/Home';
import { OurProducts } from '../../views/OurProducts';
import { OurServices } from '../../views/OurServices';
import { PrivacyPolicy } from '../../views/PrivacyPolicy';
import { SessionTimeout } from '../../views/SessionTimeout';
import { SystemUnavailable } from '../../views/SystemUnavailable';
import { TermsOfService } from '../../views/TermsOfService';
import { FAQ } from '../../views/FAQ';

// <------------------>
//  Routes
// <------------------>
export enum PageNames {
    About = "About",
    Contact = "Contact",
    Home = "Home",
    Products = "Our Products",
    Services = "Our Services",
    FAQ = "FAQ",
    PrivacyPolicy = "Privacy Policy",
    TermsOfService = "Terms of Service"
}

export enum PageRoutes {
    About = "about",
    Contact = "contact",
    Home = " ",
    Products = "our-products",
    Services = "our-services",
    FAQ = "faq",
    PrivacyPolicy = "privacy-policy",
    TermsOfService = "terms-of-service"
}

export enum ErrorPageRoutes{
    SessionTimeOut = "session-timed-out",
    SystemUnavailable = "system-unavailable"
}
export enum ErrorPages {
    SessionTimeOut = "Session timed out",
    SystemUnavailable = "System unavailable"
}

export enum ErrorPageHeading {
    SessionTimeOut = "Oh no!",
    SystemUnavailable = "Oh no!"
}

export type AppRoute = PageRoutes | ErrorPageRoutes;

export const getRouteUrl = (route: AppRoute) => `${process.env.PUBLIC_URL}/${route}`;



// <------------------>
//  Route Information
// <------------------>
export interface RouteInformation {
    key: string;
    path: string;
    name: string;
    element: JSX.Element;
    heading?: string;
}

export const pageRouteInfo: Record<Pages, RouteInformation> = {
    [Pages.About]: {
        key: Pages.About,
        path: getRouteUrl(Pages.About),
        name: Pages.About,
        element: <AboutUs/>,
    },
    [Pages.Contact]: {
        key: Pages.Contact,
        path: getRouteUrl(Pages.Contact),
        name: Pages.Contact,
        element: <Contact />,
    },
    [Pages.Home]: {
        key: Pages.Home,
        path: getRouteUrl(Pages.Home),
        name: Pages.Home,
        element: <Home />,
    },
    [Pages.Products]: {
        key: Pages.Products,
        path: getRouteUrl(Pages.Products),
        name: Pages.Products,
        element: <OurProducts />,
    },
    [Pages.Services]: {
        key: Pages.Services,
        path: getRouteUrl(Pages.Services),
        name: Pages.Services,
        element: <OurServices />,
    },

    [Pages.FAQ]: {
        key: Pages.FAQ,
        path: getRouteUrl(Pages.FAQ),
        name: Pages.FAQ,
        element: <FAQ />,
    },
    [Pages.PrivacyPolicy]: {
        key: Pages.PrivacyPolicy,
        path: getRouteUrl(Pages.PrivacyPolicy),
        name: Pages.PrivacyPolicy,
        element: <PrivacyPolicy />,
    },
    [Pages.TermsOfService]: {
        key: Pages.TermsOfService,
        path: getRouteUrl(Pages.TermsOfService),
        name: Pages.TermsOfService,
        element: <TermsOfService />,
    },
};



console.log('Privacy Policy Path:', pageRouteInfo[Pages.PrivacyPolicy].path);
console.log('Generated Path:', getRouteUrl(Pages.PrivacyPolicy));



export const errorRouteInfo: Record<ErrorPages, RouteInformation> = {
    [ErrorPages.SessionTimeOut]: {
        key: ErrorPages.SessionTimeOut,
        path: getRouteUrl(ErrorPages.SessionTimeOut),
        name: ErrorPages.SessionTimeOut,
        element: <SessionTimeout />,
        heading: ErrorPageHeading.SessionTimeOut,
    },
    [ErrorPages.SystemUnavailable]: {
        key: ErrorPages.SystemUnavailable,
        path: getRouteUrl(ErrorPages.SystemUnavailable),
        name: ErrorPages.SystemUnavailable,
        element: <SystemUnavailable />,
        heading: ErrorPageHeading.SystemUnavailable,
    },
};

export const pageRoutePaths = Object.values(pageRouteInfo).map((route) => route.path);
export const errorRoutePaths = Object.values(errorRouteInfo).map((route) => route.path);

export const pageRoutes: RouteInformation[] = Object.values(pageRouteInfo);
export const errorRoutes: RouteInformation[] = Object.values(errorRouteInfo);
export const allRoutes = [...pageRoutes, ...errorRoutes];
