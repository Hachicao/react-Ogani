import React from "react";
import { DashboardBody } from "../componentAdmin/DashboardBody";
import { FooterAdmin } from "../componentAdmin/FooterAdmin";

export default function Dashboard() {
  return (
    <>
      <div id="wrapper">
        <DashboardBody />
        <FooterAdmin />
      </div>
    </>
  );
}
