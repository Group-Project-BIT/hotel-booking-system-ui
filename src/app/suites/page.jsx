"use client";
import { SuiteSelectorTabs } from "@/components/suites/TabSelector";
import { StickyNavbar } from "@/components/Navbar";
import {FooterWithSocialLinks} from "@/components/Footer";
import React from "react";

const SuitesPage = () => {
  return (
    <div>
      <div>
        <StickyNavbar />
      </div>
      <div className="flex justify-center  min-h-screen ">
        <SuiteSelectorTabs />
      </div>
      <div>
        <FooterWithSocialLinks />
      </div>
    </div>

  );
};

export default SuitesPage;
