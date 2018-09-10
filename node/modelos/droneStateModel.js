var droneStateModel = function () {
	this.flying
  this.videoEnabled
  this.visionEnabled 
  this.controlAlgorithm 
  this.altitudeControlAlgorithm
  this.startButtonState
  this.controlCommandAck
  this.cameraReady
  this.travellingEnabled
  this.usbReady
  this.navdataDemo
  this.navdataBootstrap
  this.motorProblem
  this.communicationLost
  this.softwareFault
  this.lowBattery
  this.userEmergencyLanding
  this.timerElapsed
  this.MagnometerNeedsCalibration
  this.anglesOutOfRange
  this.tooMuchWind
  this.ultrasonicSensorDeaf
  this.cutoutDetected
  this.picVersionNumberOk
  this.atCodecThreadOn
  this.navdataThreadOn
  this.videoThreadOn
  this.acquisitionThreadOn
  this.controlWatchdogDelay
  this.adcWatchdogDelay
  this.comWatchdogProblem
  this.emergencyLanding
}

droneStateModel.prototype.setFlying                     = function (sStats) { this.flying = sStats }
droneStateModel.prototype.setVideoEnabled               = function (sStats) { this.videoEnabled = sStats }
droneStateModel.prototype.setVisionEnabled              = function (sStats) { this.visionEnabled = sStats }
droneStateModel.prototype.setControlAlgorithm           = function (sStats) { this.controlAlgorithm = sStats }
droneStateModel.prototype.setAltitudeControlAlgorithm   = function (sStats) { this.altitudeControlAlgorithm = sStats }
droneStateModel.prototype.setStartButtonState           = function (sStats) { this.startButtonState = sStats }
droneStateModel.prototype.setControlCommandAck          = function (sStats) { this.controlCommandAck = sStats }
droneStateModel.prototype.setCameraReady                = function (sStats) { this.cameraReady = sStats }
droneStateModel.prototype.setTravellingEnabled          = function (sStats) { this.travellingEnabled = sStats }
droneStateModel.prototype.setUsbReady                   = function (sStats) { this.usbReady = sStats }
droneStateModel.prototype.setNavdataDemo                = function (sStats) { this.navdataDemo = sStats }
droneStateModel.prototype.setNavdataBootstrap           = function (sStats) { this.navdataBootstrap = sStats }
droneStateModel.prototype.setMotorProblem               = function (sStats) { this.motorProblem = sStats }
droneStateModel.prototype.setCommunicationLost          = function (sStats) { this.communicationLost = sStats }
droneStateModel.prototype.setSoftwareFault              = function (sStats) { this.softwareFault = sStats }
droneStateModel.prototype.setLowBattery                 = function (sStats) { this.lowBattery = sStats }
droneStateModel.prototype.setUserEmergencyLanding       = function (sStats) { this.userEmergencyLanding = sStats }
droneStateModel.prototype.setTimerElapsed               = function (sStats) { this.timerElapsed = sStats }
droneStateModel.prototype.setMagnometerNeedsCalibration = function (sStats) { this.MagnometerNeedsCalibration = sStats }
droneStateModel.prototype.setAnglesOutOfRange           = function (sStats) { this.anglesOutOfRange = sStats }
droneStateModel.prototype.setTooMuchWind                = function (sStats) { this.tooMuchWind = sStats }
droneStateModel.prototype.setUltrasonicSensorDeaf       = function (sStats) { this.ultrasonicSensorDeaf = sStats }
droneStateModel.prototype.setCutoutDetected             = function (sStats) { this.cutoutDetected = sStats }
droneStateModel.prototype.setPicVersionNumberOk         = function (sStats) { this.picVersionNumberOk = sStats }
droneStateModel.prototype.setAtCodecThreadOn            = function (sStats) { this.atCodecThreadOn = sStats }
droneStateModel.prototype.setNavdataThreadOn            = function (sStats) { this.navdataThreadOn = sStats }
droneStateModel.prototype.setVideoThreadOn              = function (sStats) { this.videoThreadOn = sStats }
droneStateModel.prototype.setAcquisitionThreadOn        = function (sStats) { this.acquisitionThreadOn = sStats }
droneStateModel.prototype.setControlWatchdogDelay       = function (sStats) { this.controlWatchdogDelay = sStats }
droneStateModel.prototype.setAdcWatchdogDelay           = function (sStats) { this.adcWatchdogDelay = sStats }
droneStateModel.prototype.setComWatchdogProblem         = function (sStats) { this.comWatchdogProblem = sStats }
droneStateModel.prototype.setEmergencyLanding           = function (sStats) { this.emergencyLanding = sStats }  

module.exports = droneStateModel