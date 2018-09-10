var visionDetectModel = function () {
	this.nbDetected
  this.typex = []
  this.xc = []
  this.yc = []
  this.widthx = []
  this.heightx = []
  this.dist = []
  this.orientationAngle = []
  this.rotation = []
  this.translation = []
  this.cameraSource = []  
}

visionDetectModel.prototype.setNbDetected               = function (sStats) { this.nbDetected = sStats }
visionDetectModel.prototype.setTypex                    = function (sStats) { 
  this.typex[0] = sStats[0]
  this.typex[1] = sStats[1]
  this.typex[2] = sStats[2]
  this.typex[3] = sStats[3]    
}
visionDetectModel.prototype.setXc                       = function (sStats) { 
  this.xc[0] = sStats[0]
  this.xc[1] = sStats[1]
  this.xc[2] = sStats[2]
  this.xc[3] = sStats[3]    
}
visionDetectModel.prototype.setYc                       = function (sStats) { 
  this.yc[0] = sStats[0]
  this.yc[1] = sStats[1]
  this.yc[2] = sStats[2]
  this.yc[3] = sStats[3]    
}
visionDetectModel.prototype.setWidthx                   = function (sStats) { 
  this.widthx[0] = sStats[0]
  this.widthx[1] = sStats[1]
  this.widthx[2] = sStats[2]
  this.widthx[3] = sStats[3]    
}
visionDetectModel.prototype.setHeightx                  = function (sStats) { 
  this.heightx[0] = sStats[0]
  this.heightx[1] = sStats[1]
  this.heightx[2] = sStats[2]
  this.heightx[3] = sStats[3]    
}
visionDetectModel.prototype.setDis                      = function (sStats) { 
  this.dist[0] = sStats[0]
  this.dist[1] = sStats[1]
  this.dist[2] = sStats[2]
  this.dist[3] = sStats[3]    
}
visionDetectModel.prototype.setOrientationAngle         = function (sStats) { 
  this.orientationAngle[0] = sStats[0]
  this.orientationAngle[1] = sStats[1]
  this.orientationAngle[2] = sStats[2]
  this.orientationAngle[3] = sStats[3]    
}
visionDetectModel.prototype.setRotation                 = function (sStats) { 
  this.rotation[0] = sStats[0]
  this.rotation[1] = sStats[1]
  this.rotation[2] = sStats[2]
  this.rotation[3] = sStats[3]    
}
visionDetectModel.prototype.setTranslation              = function (sStats) { 
  this.translation[0] = sStats[0]
  this.translation[1] = sStats[1]
  this.translation[2] = sStats[2]
  this.translation[3] = sStats[3]    
}
visionDetectModel.prototype.setCameraSource             = function (sStats) { 
  this.cameraSource[0] = sStats[0]
  this.cameraSource[1] = sStats[1]
  this.cameraSource[2] = sStats[2]
  this.cameraSource[3] = sStats[3]    
}
module.exports = visionDetectModel