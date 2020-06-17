/*eslint-disable*/
import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";
import { createComputedPropertyName } from "typescript";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  // console.log(props);
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }
  const { color, logo, image, logoText, routes } = props;
  const childrens = routes.children;
  // console.log(routes);

  const [showChildren, setShowChildren] = useState({
    settings: [
      { id: 0, open: false },
      { id: 1, open: false },
      { id: 2, open: false },
      { id: 3, open: false },
      { id: 4, open: false },
      { id: 5, open: false },
      { id: 6, open: false },
      { id: 7, open: false },
      { id: 8, open: false },
      { id: 9, open: false },
      { id: 10, open: false },
      { id: 11, open: false },
      { id: 12, open: false },
      { id: 13, open: false },
      { id: 14, open: false },
      { id: 15, open: false },
      { id: 16, open: false },
      { id: 17, open: false },
      { id: 18, open: false },
      { id: 19, open: false },
      { id: 20, open: false },
      { id: 21, open: false },
      { id: 22, open: false },
      { id: 23, open: false },
      { id: 24, open: false },
    ],
  });

  const handleClick = (id) => {
    setShowChildren((state) => ({
      ...state,
      settings: state.settings.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      ),
    }));
  };

  var links = (data) => {
    return (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          console.log(prop)
          var activePro = " ";
          var listItemClasses;
          if (prop.path === "/upgrade-to-pro") {
            activePro = classes.activePro + " ";
            listItemClasses = classNames({
              [" " + classes[color]]: true,
            });
          } else {
            listItemClasses = classNames({
              [" " + classes[color]]: activeRoute(prop.layout + prop.path),
            });
          }
          const whiteFontClasses = classNames({
            [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
          });

          if (!prop.children) {
            return (
              <NavLink
                to={prop.layout + prop.path}
                className={activePro + classes.item}
                activeClassName="active"
                key={key}
              >
                <ListItem button className={classes.itemLink + listItemClasses}>
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </NavLink>
            );
          }
          return (
            <List className={classes.list} key={key}>
              <ListItem
                button
                onClick={() => handleClick(key)}
                className={classes.itemLink + listItemClasses}
              >
                {typeof prop.icon === "string" ? (
                  <Icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  >
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: props.rtlActive,
                    })}
                  />
                )}
                <ListItemText
                  primary={props.rtlActive ? prop.rtlName : prop.name}
                  className={classNames(classes.itemText, whiteFontClasses, {
                    [classes.itemTextRTL]: props.rtlActive,
                  })}
                  disableTypography={true}
                />
                {showChildren.settings.find((item) => item.id === key).open ? (
                  
                  <ExpandLess
                    className={classNames(
                      classes.revealIcon,
                      whiteFontClasses,
                      {
                        [classes.itemIconRTL]: prop.rtlActive,
                      }
                    )}
                  />
                  
                ) : (
                  
                  <ExpandMore
                    className={classNames(
                      classes.revealIcon,
                      whiteFontClasses,
                      {
                        [classes.itemIconRTL]: prop.rtlActive,
                      }
                    )}
                  />
                  
                )}
              </ListItem>

              <Collapse
                in={showChildren.settings.find((item) => item.id === key).open}
                timeout="auto"
                unmountOnExit
              >
                {prop.children.map((cProp, cKey) => {
                  {
                    /* console.log(cProp); */
                  }
                  var activePro = " ";
                  var listItemClasses;
                  if (cProp.path === "/upgrade-to-pro") {
                    activePro = classes.activePro + " ";
                    listItemClasses = classNames({
                      [" " + classes[color]]: true,
                    });
                  } else {
                    listItemClasses = classNames({
                      [" " + classes[color]]: activeRoute(
                        cProp.layout + cProp.path
                      ),
                    });
                  }
                  const whiteFontClasses = classNames({
                    [" " + classes.whiteFont]: activeRoute(
                      cProp.layout + cProp.path
                    ),
                  });

                  return (
                    <NavLink
                      to={cProp.layout + cProp.path}
                      className={activePro + classes.item}
                      activeClassName="active"
                      key={cKey}
                    >
                      <ListItem
                        button
                        className={classes.itemLinkChild + listItemClasses}
                      >
                        {typeof cProp.icon === "string" ? (
                          <Icon
                            className={classNames(
                              classes.itemIcon,
                              whiteFontClasses,
                              {
                                [classes.itemIconRTL]: cProp.rtlActive,
                              }
                            )}
                          >
                            {cProp.icon}
                          </Icon>
                        ) : (
                          <cProp.icon
                            className={classNames(
                              classes.itemIcon,
                              whiteFontClasses,
                              {
                                [classes.itemIconRTL]: cProp.rtlActive,
                              }
                            )}
                          />
                        )}
                        <ListItemText
                          primary={props.rtlActive ? cProp.rtlName : cProp.name}
                          inset
                          className={classNames(
                            classes.itemTextChild,
                            whiteFontClasses,
                            {
                              [classes.itemTextRTL]: cProp.rtlActive,
                            }
                          )}
                          disableTypography={true}
                        />
                      </ListItem>
                    </NavLink>
                  );
                })}
              </Collapse>
            </List>
          );
        })}
      </List>
    );
  };

  var brand = (
    <div className={classes.logo}>
      <a
        href="https://www.creative-tim.com?ref=mdr-sidebar"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive,
        })}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            {links(routes)}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links(routes)}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
