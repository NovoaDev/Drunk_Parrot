var demoModel = function () {
	this.controlState
  this.flyState
  this.batteryPercentage
  this.rotationFrontBack
  this.rotationPitch
  this.rotationTheta
  this.rotationY
  this.rotationLeftRight
  this.rotationRoll
  this.rotationPhi
  this.rotationX
  this.rotationClockwise
  this.rotationYaw
  this.rotationPsi
  this.rotationZ
  this.frontBackDegrees
  this.leftRightDegrees
  this.clockwiseDegrees
  this.altitude
  this.altitudeMeters
  this.velocityX
  this.velocityY
  this.velocityZ
  this.xVelocity
  this.yVelocity
  this.zVelocity
  this.frameIndex
  this.detectionCamera
  this.detectionTagIndex
  this.droneCamera
}

demoModel.prototype.setControlState               = function (sStats) { this.controlState = sStats }
demoModel.prototype.setFlyState                   = function (sStats) { this.flyState = sStats }
demoModel.prototype.setBatteryPercentage          = function (sStats) { this.batteryPercentage = sStats }
demoModel.prototype.setRotationFrontBack          = function (sStats) { this.rotationFrontBack = sStats }
demoModel.prototype.setRotationPitch              = function (sStats) { this.rotationPitch = sStats }
demoModel.prototype.setRotationTheta              = function (sStats) { this.rotationTheta = sStats }
demoModel.prototype.setRotationY                  = function (sStats) { this.rotationY = sStats }
demoModel.prototype.setRotationLeftRight          = function (sStats) { this.rotationLeftRight = sStats }
demoModel.prototype.setRotationRoll               = function (sStats) { this.rotationRoll = sStats }
demoModel.prototype.setRotationPhi                = function (sStats) { this.rotationPhi = sStats }
demoModel.prototype.setRrotationX                 = function (sStats) { this.rotationX = sStats }
demoModel.prototype.setRrotationClockwise         = function (sStats) { this.rotationClockwise = sStats }
demoModel.prototype.setRrotationYaw               = function (sStats) { this.rotationYaw = sStats }
demoModel.prototype.setRotationPsi                = function (sStats) { this.rotationPsi = sStats }
demoModel.prototype.setRotationZ                  = function (sStats) { this.rotationZ = sStats }
demoModel.prototype.setFrontBackDegrees           = function (sStats) { this.frontBackDegrees = sStats }
demoModel.prototype.setLeftRightDegrees           = function (sStats) { this.leftRightDegrees = sStats }
demoModel.prototype.setClockwiseDegrees           = function (sStats) { this.clockwiseDegrees = sStats }
demoModel.prototype.setAltitude                   = function (sStats) { this.altitude = sStats }
demoModel.prototype.setAltitudeMeters             = function (sStats) { this.altitudeMeters = sStats }
demoModel.prototype.setVelocityX                  = function (sStats) { this.velocityX = sStats }
demoModel.prototype.setVelocityY                  = function (sStats) { this.velocityY = sStats }
demoModel.prototype.setVelocityZ                  = function (sStats) { this.velocityZ = sStats }
demoModel.prototype.setXVelocity                  = function (sStats) { this.xVelocity = sStats }
demoModel.prototype.setYVelocity                  = function (sStats) { this.yVelocity = sStats }
demoModel.prototype.setZVelocity                  = function (sStats) { this.zVelocity = sStats }
demoModel.prototype.setFrameIndex                 = function (sStats) { this.frameIndex = sStats }
demoModel.prototype.setDetectionCamera            = function (sStats) { this.detectionCamera = sStats }
demoModel.prototype.setDetectionTagIndex          = function (sStats) { this.detectionTagIndex = sStats }
demoModel.prototype.setDroneCamera                = function (sStats) { this.droneCamera = sStats }

module.exports = demoModel