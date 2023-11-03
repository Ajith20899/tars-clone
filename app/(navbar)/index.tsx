
import React from 'react';
import dynamic from 'next/dynamic';

import { isMobile } from 'react-device-detect';

const NavbarMobile = dynamic(() => import("@/app/(navbar)/mobile"));
const NavbarDesktop = dynamic(() => import("@/app/(navbar)/desktop"));

export default function NavBar() {
  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
}
