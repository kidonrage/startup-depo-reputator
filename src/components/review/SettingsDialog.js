import React, { useState, useEffect, useCallback } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

const SettingsDialog = ({
  open,
  handleClose,
  initialPanelsConfiguration = [],
  handlePanelsConfigSave,
}) => {
  const theme = useTheme()

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [panelsConfiguration, setPanelsConfiguration] = useState(
    initialPanelsConfiguration
  )

  const handleSave = () => {
    handlePanelsConfigSave(panelsConfiguration)
    handleClose()
  }

  const handlePanelsConfigChange = (event) => {
    const updatedPanelName = event.target.name

    const updatedPanelsConfig = [...panelsConfiguration]
    const updatedPanelConfigIndex = updatedPanelsConfig.findIndex(
      (config) => config.panelName === updatedPanelName
    )
    updatedPanelsConfig[updatedPanelConfigIndex] = {
      ...updatedPanelsConfig[updatedPanelConfigIndex],
      showPanel: event.target.checked,
    }

    setPanelsConfiguration(updatedPanelsConfig)
  }

  React.useEffect(() => {
    if (!open) {
      setPanelsConfiguration(initialPanelsConfiguration)
    }
  }, [initialPanelsConfiguration, open])

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Настройки</DialogTitle>
        <DialogContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">Графики</FormLabel>
            <FormGroup>
              {panelsConfiguration.map((panelConfig) => (
                <FormControlLabel
                  key={panelConfig.panelName}
                  control={
                    <Checkbox
                      checked={panelConfig.showPanel}
                      onChange={handlePanelsConfigChange}
                      name={panelConfig.panelName}
                    />
                  }
                  label={panelConfig.panelLabel}
                />
              ))}
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="primary" autoFocus>
            Сохранить
          </Button>
          <Button onClick={handleClose} color="secondary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SettingsDialog
