import React from "react";
import { useRouteError } from "react-router-dom";
import { Header } from "../../User/component/Header";

export default function ErrorPage() {
  const error = useRouteError();
  function isError(error: any): error is { statusText: string } {
    return "statusText" in error;
  }
  return (
    <>
      <Header />
      <div className="text-center p-5 text-xl">
        <p>Sorry, the page you are looking for does not exist.</p>
        {isError(error) && (
          <p className="text-base text-slate-700">{error.statusText}</p>
        )}
      </div>
    </>
  );
}
