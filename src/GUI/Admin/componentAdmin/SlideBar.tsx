import path from "path";
import React from "react";
import { NavLink } from "react-router-dom";

export const SlideBar = () => {
  return (
    <>
      <div className="sidebarAdmin" role="navigation">
        <div className="wp-sidebar-nav">
          <div className="user-profile">
            <div className="dropdown user-pro-body">
              <div>
                <img
                  src="/assest/plugins/images/users/varun.jpg"
                  alt="user-img"
                  className="img-circle"
                />
              </div>{" "}
              <a
                href="#"
                className="dropdown-toggle u-dropdown"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Steave Gection <span className="caret"></span>
              </a>
              <ul className="dropdown-menu animated flipInY">
                <li>
                  <a href="#">
                    <i className="ti-user"></i> My Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-wallet"></i> My Balance
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-email"></i> Inbox
                  </a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">
                    <i className="ti-settings"></i> Account Setting
                  </a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="login.html">
                    <i className="fa fa-power-off"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="wp-side-menu">
            <li>
              {" "}
              <NavLink to="/admin">
                <i className="linea-icon linea-basic fa-fw" data-icon="v"></i>{" "}
                <span className="hide-menu"> Dashboard</span>
              </NavLink>
              <ul className="nav-second-level">
                <li>
                  {" "}
                  {/* <NavLink to="UserManagement">User Managerment</NavLink> */}
                </li>
                <li>
                  {" "}
                  {/* <NavLink to="ProductManagement">Product Managerment</NavLink> */}
                </li>
              </ul>
            </li>
            {/* <li>
              {" "}
              <a href="javascript:void(0);" className="waves-effect">
                <i
                  className="linea-icon linea-basic fa-fw text-danger"
                  data-icon="7"
                ></i>{" "}
                <span className="hide-menu text-danger">
                  {" "}
                  Multipurpose <span className="fa arrow"></span>{" "}
                  <span className="label label-rouded label-danger pull-right">
                    HOT
                  </span>
                </span>
              </a>
              <ul className="nav nav-second-level">
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-hospital/index.html">
                    Hospital Admin
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-crm/index.html">
                    CRM Admin
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-university/index.html">
                    University Admin
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-music/index.html">
                    Music Admin
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-real-estate/index.html">
                    Real Estate Admin
                  </a>{" "}
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-inverse/index.html">
                    Inverse
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-colors/index.html">
                    Colors
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin/index.html">
                    Eliteadmin
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-ecommerce/index.html">
                    Ecommerce
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-modern/index.html">
                    Modern
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-inverse-php/index.php">
                    Basic PHP
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-material/index3.html">
                    Material Design
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-dark/index.html">
                    Dark
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-mini-sidebar/index3.html">
                    Mini Sidebar
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-horizontal-navbar/index3.html">
                    Horizontal Boxed Nav
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-horizontal-nav-fullwidth/index.html">
                    Horizontal Full Nav
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-iconbar/index4.html">
                    Iconbar
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-rtl/index.html">
                    Eliteadmin RTL
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://eliteadmin.themedesigner.in/demos/eliteadmin-inverse-rtl/index.html">
                    Inverse RTL
                  </a>
                </li>
              </ul>
            </li> */}
            <li>
              <NavLink to="/admin/UserManagement">
                <i data-icon="f" className="linea-icon linea-basic fa-fw"></i>{" "}
                <span className="hide-menu">User Managerment</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/ProductManagement"}>
                <i data-icon="f" className="linea-icon linea-basic fa-fw"></i>{" "}
                <span className="hide-menu">
                  Product Managerment
                  <span className="label label-rouded label-info pull-right"></span>{" "}
                </span>
              </NavLink>
            </li>
            {/* <li>
              {" "}
              <a href="javascript:void(0)">
                <i
                  data-icon="&#xe00b;"
                  className="linea-icon linea-basic fa-fw"
                ></i>{" "}
                <span className="hide-menu">
                  Forms<span className="fa arrow"></span>
                </span>
              </a>
              <ul className="nav-second-level">
                <li>
                  <a href="form-basic.html">Basic Forms</a>
                </li>
                <li>
                  <a href="form-layout.html">Form Layout</a>
                </li>
                <li>
                  <a href="form-advanced.html">Form Addons</a>
                </li>
                <li>
                  <a href="form-material-elements.html">Form Material</a>
                </li>
                <li>
                  <a href="form-float-input.html">Form Float Input</a>
                </li>
                <li>
                  <a href="form-upload.html">File Upload</a>
                </li>
                <li>
                  <a href="form-mask.html">Form Mask</a>
                </li>
                <li>
                  <a href="form-img-cropper.html">Image Cropping</a>
                </li>
                <li>
                  <a href="form-validation.html">Form Validation</a>
                </li>
                <li>
                  <a href="form-dropzone.html">File Dropzone</a>
                </li>
                <li>
                  <a href="form-pickers.html">Form-pickers</a>
                </li>
                <li>
                  <a href="icheck-control.html">Icheck Form Controls</a>
                </li>
                <li>
                  <a href="form-wizard.html">Form-wizards</a>
                </li>
                <li>
                  <a href="form-typehead.html">Typehead</a>
                </li>
                <li>
                  <a href="form-xeditable.html">X-editable</a>
                </li>
                <li>
                  <a href="form-summernote.html">Summernote</a>
                </li>
                <li>
                  <a href="form-bootstrap-wysihtml5.html">
                    Bootstrap wysihtml5
                  </a>
                </li>
                <li>
                  <a href="form-tinymce-wysihtml5.html">Tinymce wysihtml5</a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">--- Proffessional</li>
            <li>
              {" "}
              <a href="javascript:void(0)">
                <i
                  data-icon="&#xe008;"
                  className="linea-icon linea-basic fa-fw"
                ></i>{" "}
                <span className="hide-menu">
                  Sample Pages<span className="fa arrow"></span>
                  <span className="label label-rouded label-purple pull-right">
                    30
                  </span>
                </span>
              </a>
              <ul className="nav-second-level">
                <li>
                  <a href="starter-page.html">Starter Page</a>
                </li>
                <li>
                  <a href="blank.html">Blank Page</a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    Email Templates<span className="fa arrow"></span>
                  </a>
                  <ul className="nav-third-level">
                    <li>
                      {" "}
                      <a href="http://eliteadmin.themedesigner.in/demos/email-templates/basic.html">
                        Basic
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="http://eliteadmin.themedesigner.in/demos/email-templates/alert.html">
                        Alert
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="http://eliteadmin.themedesigner.in/demos/email-templates/billing.html">
                        Billing
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="http://eliteadmin.themedesigner.in/demos/email-templates/password-reset.html">
                        Reset Pwd
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    Error Pages<span className="fa arrow"></span>
                  </a>
                  <ul className="nav-third-level">
                    <li>
                      <a href="400.html">Error 400</a>
                    </li>
                    <li>
                      <a href="403.html">Error 403</a>
                    </li>
                    <li>
                      <a href="404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="500.html">Error 500</a>
                    </li>
                    <li>
                      <a href="503.html">Error 503</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    Profile<span className="fa arrow"></span>
                  </a>
                  <ul className="nav-third-level">
                    <li>
                      <a href="profile.html">Profile</a>
                    </li>
                    <li>
                      <a href="login.html">Login Page</a>
                    </li>
                    <li>
                      <a href="login2.html">Login v2</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                    <li>
                      <a href="register2.html">Register v2</a>
                    </li>
                    <li>
                      <a href="recoverpw.html">Recover Password</a>
                    </li>
                    <li>
                      <a href="lock-screen.html">Lock Screen</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="lightbox.html">Lightbox Popup</a>
                </li>
                <li>
                  <a href="treeview.html">Treeview</a>
                </li>
                <li>
                  <a href="search-result.html">Search Result</a>
                </li>
                <li>
                  <a href="utility-classNamees.html">Utility classNamees</a>
                </li>
                <li>
                  <a href="custom-scroll.html">Custom Scrolls</a>
                </li>
                <li>
                  <a href="animation.html">Animations</a>
                </li>
                <li>
                  <a href="invoice.html">Invoice</a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="javascript:void(0)">
                <i
                  data-icon="&#xe006;"
                  className="linea-icon linea-basic fa-fw"
                ></i>{" "}
                <span className="hide-menu">
                  Charts<span className="fa arrow"></span>
                </span>
              </a>
              <ul className="nav-second-level">
                <li>
                  {" "}
                  <a href="flot.html">Flot Charts</a>{" "}
                </li>
                <li>
                  <a href="morris-chart.html">Morris Chart</a>
                </li>
                <li>
                  <a href="chart-js.html">Chart-js</a>
                </li>
                <li>
                  <a href="peity-chart.html">Peity Charts</a>
                </li>
                <li>
                  <a href="sparkline-chart.html">Sparkline charts</a>
                </li>
                <li>
                  <a href="extra-charts.html">Extra Charts</a>
                </li>
                <li>
                  <a href="knob-chart.html">Knob Charts</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="javascript:void(0)">
                <i
                  data-icon="O"
                  className="linea-icon linea-software fa-fw"
                ></i>{" "}
                <span className="hide-menu">
                  Tables<span className="fa arrow"></span>
                  <span className="label label-rouded label-danger pull-right">
                    7
                  </span>
                </span>
              </a>
              <ul className="nav-second-level">
                <li>
                  <a href="basic-table.html">Basic Tables</a>
                </li>
                <li>
                  <a href="table-layouts.html">Table Layouts</a>
                </li>
                <li>
                  <a href="data-table.html">Data Table</a>
                </li>
                <li className="hidden">
                  <a href="crud-table.html">Crud Table</a>
                </li>
                <li>
                  <a href="bootstrap-tables.html">Bootstrap Tables</a>
                </li>
                <li>
                  <a href="responsive-tables.html">Responsive Tables</a>
                </li>
                <li>
                  <a href="editable-tables.html">Editable Tables</a>
                </li>
                <li>
                  <a href="foo-tables.html">FooTables</a>
                </li>
                <li>
                  <a href="jsgrid.html">JsGrid Tables</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="widgets.html">
                <i data-icon="P" className="linea-icon linea-basic fa-fw"></i>{" "}
                <span className="hide-menu">Widgets</span>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">
                <i data-icon="7" className="linea-icon linea-basic fa-fw"></i>{" "}
                <span className="hide-menu">
                  Icons<span className="fa arrow"></span>
                </span>
              </a>
              <ul className="nav-second-level">
                <li>
                  {" "}
                  <a href="fontawesome.html">Font awesome</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="themifyicon.html">Themify Icons</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="simple-line.html">Simple line Icons</a>{" "}
                </li>
                <li>
                  <a href="linea-icon.html">Linea Icons</a>
                </li>
                <li>
                  <a href="weather.html">Weather Icons</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="map-google.html">
                <i data-icon="Q" className="linea-icon linea-basic fa-fw"></i>
                <span className="hide-menu">Google Map</span>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="map-vector.html">
                <i data-icon="S" className="linea-icon linea-basic fa-fw"></i>
                <span className="hide-menu">Vector Map</span>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="calendar.html">
                <i
                  data-icon="A"
                  className="linea-icon linea-elaborate fa-fw"
                ></i>{" "}
                <span className="hide-menu">Calendar</span>
              </a>
            </li>
            <li>
              {" "}
              <a href="javascript:void(0)">
                <i
                  data-icon="F"
                  className="linea-icon linea-software fa-fw"
                ></i>{" "}
                <span className="hide-menu">
                  Multi-Level Dropdown<span className="fa arrow"></span>
                </span>
              </a>
              <ul className="nav-second-level">
                <li>
                  {" "}
                  <a href="javascript:void(0)">Second Level Item</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="javascript:void(0)">Second Level Item</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="javascript:void(0)">
                    Third Level <span className="fa arrow"></span>
                  </a>
                  <ul className="nav-third-level">
                    <li>
                      {" "}
                      <a href="javascript:void(0)">Third Level Item</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="javascript:void(0)">Third Level Item</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="javascript:void(0)">Third Level Item</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="javascript:void(0)">Third Level Item</a>{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="login.html">
                <i className="icon-logout fa-fw"></i>{" "}
                <span className="hide-menu">Log out</span>
              </a>
            </li>
            <li className="nav-small-cap">--- Support</li>
            <li>
              <a href="documentation.html">
                <i className="fa fa-circle-o text-danger"></i>{" "}
                <span className="hide-menu">Documentation</span>
              </a>
            </li>
            <li>
              <a href="gallery.html">
                <i className="fa fa-circle-o text-info"></i>{" "}
                <span className="hide-menu">Gallery</span>
              </a>
            </li>
            <li>
              <a href="faq.html">
                <i className="fa fa-circle-o text-success"></i>{" "}
                <span className="hide-menu">Faqs</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};
