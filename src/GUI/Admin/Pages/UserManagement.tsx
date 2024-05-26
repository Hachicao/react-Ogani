import React from "react";
import { UserManager } from "../componentAdmin/UserManager";
import { FooterAdmin } from "../componentAdmin/FooterAdmin";

export default function UserManagement() {
  return (
    <>
      <div id="wrapper">
        <UserManager />
        <FooterAdmin />
      </div>
    </>
  );
}
