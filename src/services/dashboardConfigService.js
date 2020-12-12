import defaultPanelsConfig from '../config/defaultPanelsConfig'

const dashboardConfigLSKey = 'panelsConfig'

export function saveDashboardConfig(config) {
  const configToSave = config.map(({ panelName, showPanel }) => ({
    panelName,
    showPanel,
  }))
  localStorage.setItem(dashboardConfigLSKey, JSON.stringify(configToSave))
}
export function loadDashboardConfig() {
  const savedPanelsConfigJSON = localStorage.getItem('panelsConfig')

  if (!savedPanelsConfigJSON) {
    return defaultPanelsConfig
  }

  const savedConfig = JSON.parse(savedPanelsConfigJSON)

  const configWithComponents = savedConfig.map((configItem) => {
    let configItemIndex = defaultPanelsConfig.findIndex(
      (defaultConfigItem) =>
        defaultConfigItem.panelName === configItem.panelName
    )

    return {
      ...defaultPanelsConfig[configItemIndex],
      ...configItem,
    }
  })

  return configWithComponents
}
