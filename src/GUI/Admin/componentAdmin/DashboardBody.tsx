import React from "react";

export const DashboardBody = () => {
  return (
    <>
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Dashboard 1</h4>{" "}
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
              {" "}
              <a
                href="https://themeforest.net/item/elite-admin-responsive-dashboard-web-app-kit-/16750820"
                target="_blank"
                className="btn btn-danger pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light"
              >
                Buy Eliteadmin Now
              </a>
              <ol className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li className="active">Dashboard 1</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="white-box m-b-0 bg-danger">
                <h3 className="text-white box-title">
                  Analysis{" "}
                  <span className="pull-right">
                    <i className="fa fa-caret-up"></i> 260
                  </span>
                </h3>
                <div id="sparkline1dash"></div>
              </div>
              <div className="white-box">
                <div className="row">
                  <div className="col">
                    <div className="text-muted m-t-20">SITE ANALYSIS</div>
                    <h2>21000</h2>{" "}
                  </div>
                  <div
                    data-label="60%"
                    className="css-bar css-bar-60 css-bar-lg m-b-0 css-bar-danger pull-right"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="white-box m-b-0 bg-info">
                <h3 className="text-white box-title">
                  Sales{" "}
                  <span className="pull-right">
                    <i className="fa fa-caret-down"></i> 160
                  </span>
                </h3>
                <div id="sparkline2dash" className="text-center"></div>
              </div>
              <div className="white-box">
                <div className="row">
                  <div className="col">
                    <div className="text-muted m-t-20">TOTAL SALES</div>
                    <h2>21000</h2>{" "}
                  </div>
                  <div
                    data-label="60%"
                    className="css-bar css-bar-60 css-bar-lg m-b-0  css-bar-info pull-right"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="white-box m-b-0 bg-purple">
                <h3 className="text-white box-title">
                  Site visits{" "}
                  <span className="pull-right">
                    <i className="fa fa-caret-up"></i> 260
                  </span>
                </h3>
                <div id="sparkline3dash"></div>
              </div>
              <div className="white-box">
                <div className="row">
                  <div className="col">
                    <div className="text-muted m-t-20">TOTAL VISITS</div>
                    <h2>26000</h2>{" "}
                  </div>
                  <div
                    data-label="60%"
                    className="css-bar css-bar-60 css-bar-lg m-b-0 css-bar-purple pull-right"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="white-box m-b-0 bg-inverse">
                <h3 className="text-white box-title">
                  Power consumption{" "}
                  <span className="pull-right">
                    <i className="fa fa-caret-up"></i> 260
                  </span>
                </h3>
                <div id="sparkline4dash" className="text-center"></div>
              </div>
              <div className="white-box">
                <div className="row">
                  <div className="col">
                    <div className="text-muted m-t-20">TOTAL CONSUMPTION</div>
                    <h2>61000</h2>{" "}
                  </div>
                  <div
                    data-label="60%"
                    className="css-bar css-bar-60 css-bar-lg m-b-0 css-bar-inverse pull-right"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
