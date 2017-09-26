export const initialState = {
  // Begin Dashboard
  dashboard: {
    zones: {
    header: true,
    aside: true,
    main: true,
  },
  regions: {
    tabs: false,
    tray: false,
    panelLeft: true,
    panelRight: true,
  },
  /*--- Header ---*/
  header: {
    layout: {
      gradient: 'green',
      ml: [0],
      mt: [0],
      p: [5]
    },
    meta: {
      h: [120, 80],
      mb: [20, 40]
    }
  },
  /*--- Aside ---*/
  aside: {
    layout: {
      bg: 'grayBlue',
      gradient: 'blue',
      br: ['0 15px 0 0'],
      color: ['white'],
      mt: [140, 95],
    
      w: [0, 170, 250],
    },
    meta: {
      mr: 0
    }
  },
  /*--- Main ---*/
  main: {
    layout: {
      bg: 'white',
      mt: [140, 120],
      mb: [0],
      ml: [0, 170, 250],
      p: [20],
    },
    regions: {
      /*--- Tabs ---*/
      tabs: {
        layout: {
          p: ['5px 10px', '10px 15px']
        },
        meta: {
          h: [40,80],
          mb: [0, 20]
        }
      },
      /*--- Tray ---*/
      tray: {
        layout: {
          mt: [40, 100],
          mb:[20, 40],
          w: [0, 120, 180]
        },
        meta: {
          mr: [0, 40, 40]
        }
      },
      /*--- Content ---*/
      content: {
        layout: {
          mt: [0],
          mb: [0],
          ml: [0],
          mr: [220],
          p: [20],
          w: ['calc(100%)'],
        },
        areas: {
          left: {
            enabled: true,
            layout: {
              flex: ["2 1 25%"],
              p: [10, 25]
            }
          },
          center: {
            enabled: true,
            layout: {
              flex: ["4 1 55%"],
              p: [30]
            }
          },
          right: {
            enabled: true,
            layout: {
              flex: ["1 1 20%"],
              p: [10, 25]
            }
          }
        }
      },
    }
  }
},
// End Dashboard



  zones: {
    header: true,
    sidebar: true,
    footer: true,
    main: true,
  },
  regions: {
    tabs: false,
    tray: false,
    panelLeft: true,
    panelRight: true,
  },
  /*--- Header ---*/
  header: {
    layout: {
      ml: [0],
      mt: [0],
      p: [0]
    },
    meta: {
      h: [120, 80],
      mb: [20, 40]
    }
  },
  /*--- Sidebar ---*/
  footer: {
    layout: {
    
    },
    meta: {
      mr: 0
    }
  },
  /*--- Sidebar ---*/
  sidebar: {
    layout: {
      mt: [140, 120],
      w: [0, 170, 250]
    },
    meta: {
      mr: 0
    }
  },
  /*--- Main ---*/
  main: {
    layout: {
      bg: 'white',
      mt: [0],
      mb: [0],
      ml: [0]
    },
    regions: {
      /*--- Tabs ---*/
      tabs: {
        layout: {
          p: ['5px 10px', '10px 15px']
        },
        meta: {
          h: [40,80],
          mb: [0, 20]
        }
      },
      /*--- Tray ---*/
      tray: {
        layout: {
          mt: [40, 100],
          mb:[20, 40],
          w: [0, 120, 180]
        },
        meta: {
          mr: [0, 40, 40]
        }
      },
      /*--- Content ---*/
      content: {
        layout: {
          mt: [0],
          mb: [0],
          ml: [0],
          mr: [220],
          p: [20],
          w: ['calc(100%)'],
        },
        areas: {
          left: {
            enabled: true,
            layout: {
              flex: ["2 1 25%"],
              p: [10, 25]
            }
          },
          center: {
            enabled: true,
            layout: {
              flex: ["4 1 55%"],
              p: [30]
            }
          },
          right: {
            enabled: true,
            layout: {
              flex: ["1 1 20%"],
              p: [10, 25]
            }
          }
        }
      },
    }
  }
}


/**
 * @function getZones
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZones = (state) => {
  return state.theme
}

/**
 * @function getZones
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZonesDashboard = (state) => {
  return state.theme.dashboard
}

/**
 * @function getZone
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZone = (state, zone) => {
  return state.theme[zone]
}

/**
 * @function getZoneDashboard
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZoneDashboard = (state, zone) => {
  return state.theme.dashboard[zone]
}

/**
 * @function getZoneLayout
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZoneLayout = (state, zone) => {
  return state.theme[zone].layout
}
/**
 * @function getZoneLayout
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZoneDashboardLayout = (state, zone) => {
  return state.theme.dashboard[zone].layout
}

/**
 * @function getZoneRegions
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZoneRegions = (state, zone) => {
  return state.theme[zone].regions
}
