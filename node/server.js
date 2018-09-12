const http = require('http')
const express = require('express')
const SocketIO = require('socket.io')
const SerialPort = require('serialport')
const bParser = require('body-parser')
const arDrone = require("ar-drone")

//Modelos datos drone
const DemoModel = require('./modelos/demoModel')
const DroneStateModel = require('./modelos/droneStateModel')
const VisionDetecModel = require('./modelos/visionDetectModel')

const drone = arDrone.createClient()

const app = express()
const server = http.createServer(app)
const io = SocketIO.listen(server)
const ReadLine = SerialPort.parsers.Readline

const port = new SerialPort("COM8", { baudRate: 9600 })
const parser = port.pipe(new ReadLine({ delimiter: '\r\n' }))

let oDemoModel = new DemoModel()
let oDroneStateModel = new DroneStateModel()
let oVisionDetecModel = new VisionDetecModel()

//Middleware`s
app.use(express.static(__dirname + '/view/public'))
app.use(bParser.urlencoded({extended: true}))

let bVolando
//---------------------------------------------------------------------- IO
parser.on('open', function () {
  	console.log('Se encuentra abierta la conexion')
})

parser.on('data', function (data) {
  selectorDeVar(data)
})
//--------------------------------------------------------------------- navdata drone

drone.on('navdata', function (navdata) {

/*  
  //---------------------------------------------- Demo
  oDemoModel.setControlState(navdata.demo.controlState)               
  oDemoModel.setFlyState(navdata.demo.flyState)                   
  oDemoModel.setBatteryPercentage(navdata.demo.batteryPercentage)

  oDemoModel.setRotationFrontBack(navdata.demo.rotation.frontBack)         
  oDemoModel.setRotationPitch(navdata.demo.rotation.pitch)              
  oDemoModel.setRotationTheta(navdata.demo.rotation.theta)              
  oDemoModel.setRotationY(navdata.demo.rotation.y)                  
  oDemoModel.setRotationLeftRight(navdata.demo.rotation.leftRight)          
  oDemoModel.setRotationRoll(navdata.demo.rotation.roll)               
  oDemoModel.setRotationPhi(navdata.demo.rotation.phi)                
  oDemoModel.setRrotationX(navdata.demo.rotation.x)                 
  oDemoModel.setRrotationClockwise(navdata.demo.rotation.clockwise)         
  oDemoModel.setRrotationYaw(navdata.demo.rotation.yaw)               
  oDemoModel.setRotationPsi(navdata.demo.rotation.psi)                
  oDemoModel.setRotationZ(navdata.demo.rotation.z)                  
  
  oDemoModel.setFrontBackDegrees(navdata.demo.frontBackDegrees)           
  oDemoModel.setLeftRightDegrees(navdata.demo.leftRightDegrees)           
  oDemoModel.setClockwiseDegrees(navdata.demo.clockwiseDegrees)           
  oDemoModel.setAltitude(navdata.demo.altitude)                   
  oDemoModel.setAltitudeMeters(navdata.demo.altitudeMeters)

  oDemoModel.setVelocityX(navdata.demo.velocity.x)                  
  oDemoModel.setVelocityY(navdata.demo.velocity.y)                  
  oDemoModel.setVelocityZ(navdata.demo.velocity.z)

  oDemoModel.setXVelocity(navdata.demo.xVelocity)                  
  oDemoModel.setYVelocity(navdata.demo.yVelocity)                  
  oDemoModel.setZVelocity(navdata.demo.zVelocity)                  
  oDemoModel.setFrameIndex(navdata.demo.frameIndex)

  //Contienen objetos JSON
  oDemoModel.setDetectionCamera(navdata.demo.detection.camera)            
  oDemoModel.setDetectionTagIndex(navdata.demo.detection.tagIndex)          
  oDemoModel.setDroneCamera(navdata.demo.drone.camera)

  //---------------------------------------------- droneState
  oDroneStateModel.setFlying(navdata.droneState.flying)
  oDroneStateModel.setVideoEnabled(navdata.droneState.videoEnabled)               
  oDroneStateModel.setVisionEnabled(navdata.droneState.visionEnabled)              
  oDroneStateModel.setControlAlgorithm(navdata.droneState.controlAlgorithm)           
  oDroneStateModel.setAltitudeControlAlgorithm(navdata.droneState.altitudeControlAlgorithm)   
  oDroneStateModel.setStartButtonState(navdata.droneState.startButtonState)           
  oDroneStateModel.setControlCommandAck(navdata.droneState.controlCommandAck)          
  oDroneStateModel.setCameraReady(navdata.droneState.cameraReady)                
  oDroneStateModel.setTravellingEnabled(navdata.droneState.travellingEnabled)          
  oDroneStateModel.setUsbReady(navdata.droneState.usbReady)                   
  oDroneStateModel.setNavdataDemo(navdata.droneState.navdataDemo)                
  oDroneStateModel.setNavdataBootstrap(navdata.droneState.navdataBootstrap)           
  oDroneStateModel.setMotorProblem(navdata.droneState.motorProblem)               
  oDroneStateModel.setCommunicationLost(navdata.droneState.communicationLost)          
  oDroneStateModel.setSoftwareFault(navdata.droneState.softwareFault)              
  oDroneStateModel.setLowBattery(navdata.droneState.lowBattery)                 
  oDroneStateModel.setUserEmergencyLanding(navdata.droneState.userEmergencyLanding)       
  oDroneStateModel.setTimerElapsed(navdata.droneState.timerElapsed)               
  oDroneStateModel.setMagnometerNeedsCalibration(navdata.droneState.MagnometerNeedsCalibration) 
  oDroneStateModel.setAnglesOutOfRange(navdata.droneState.anglesOutOfRange)           
  oDroneStateModel.setTooMuchWind(navdata.droneState.tooMuchWind)                
  oDroneStateModel.setUltrasonicSensorDeaf(navdata.droneState.ultrasonicSensorDeaf)       
  oDroneStateModel.setCutoutDetected(navdata.droneState.cutoutDetected)             
  oDroneStateModel.setPicVersionNumberOk(navdata.droneState.picVersionNumberOk)         
  oDroneStateModel.setAtCodecThreadOn(navdata.droneState.atCodecThreadOn)            
  oDroneStateModel.setNavdataThreadOn(navdata.droneState.navdataThreadOn)            
  oDroneStateModel.setVideoThreadOn(navdata.droneState.videoThreadOn)              
  oDroneStateModel.setAcquisitionThreadOn(navdata.droneState.acquisitionThreadOn)        
  oDroneStateModel.setControlWatchdogDelay(navdata.droneState.controlWatchdogDelay)       
  oDroneStateModel.setAdcWatchdogDelay(navdata.droneState.adcWatchdogDelay)           
  oDroneStateModel.setComWatchdogProblem(navdata.droneState.comWatchdogProblem)         
  oDroneStateModel.setEmergencyLanding(navdata.droneState.emergencyLanding)

  /*
  //---------------------------------------------- VisionDetected
  oVisionDetecModel.setNbDetected()
  oVisionDetecModel.setTypex()                  
  oVisionDetecModel.setXc()
  oVisionDetecModel.setYc()
  oVisionDetecModel.setWidthx()
  oVisionDetecModel.setHeightx()
  oVisionDetecModel.setDis()
  oVisionDetecModel.setOrientationAngle()
  oVisionDetecModel.setRotation()
  oVisionDetecModel.setTranslation()
  oVisionDetecModel.setCameraSource()
  */
})

//--------------------------------------------------------------------- GET

app.get('/', function (req, res) {
  res.send("navdata")
  console.log(oDemoModel)
  console.log(oDroneStateModel)
  console.log(oVisionDetecModel)
  //drone.animate('flipRight', 500);
})

app.get('/test', function (req, res) {
  res.send("test")
})

//-------------------------------------------------------------------- Control de drone

function despegar () {
  drone.stop()
  //drone.config("control:altitude_max", 100000);
  drone.takeoff()
}

function aterrizar () {
    drone.stop()
    drone.land()
}

// ------------------------------------------ Movimientos Basicos

function fuerza (sFuerza) {
  if (sFuerza == "+") { drone.up(1) }
  if (sFuerza == "-") { drone.down(1) }
}

function adelantarRetroceder (sDireccion) {
  drone.stop()
  if (sDireccion == "ADE") { drone.front(1) }
  if (sDireccion == "RET") { drone.back(1) }
}

function strafe (sDireccion) {
  drone.stop()
  if (sDireccion == "IZQ") { drone.left(1) }
  if (sDireccion == "DER") { drone.right(1) }
}

function rotar (sDireccion) {
  if (sDireccion == "IZQ") { drone.counterClockwise(1) }
  if (sDireccion == "DER") { drone.clockwise(1) }
}

function calibrarBrujula () {
  drone.stop()
  drone.calibrate(1)
}

// ----------------------------------------- Movimientos especiales


// ----------------------------------------- Sensores
function refrescarSensores (){
  bateria()
}

function bateria () {
    console.log("Batería : " + drone.battery())
}

// ----------------------------------------- Procesar datos Arduino

function selectorDeVar (sDatosArduino) {
  let sDatos = sDatosArduino
  let sDatosPrefijo = sDatos.substring(0, 4)
  let iLargoDatos = sDatos.length
  let sDatosFinal = sDatos.substring(4, iLargoDatos)

  console.log(sDatosArduino)

  if (sDatosPrefijo == "#00#") { 
    if (sDatosFinal == "0") { 
      despegar()
      bVolando = true
      console.log("Volando")
    } else {
      aterrizar()
      bVolando = false
      console.log("Aterrizando")
    } 
  }

  if (sDatosPrefijo == "#01#") { 
    // X = arriba abajo(arriba =1023, abajo 0, medio 510)
    sDatosFinal = parseInt(sDatosFinal)
    if (sDatosFinal <= 400) { 
      fuerza("-")
    } else if (sDatosFinal >= 600) {
      fuerza("+")
    } else { drone.stop() }
  }
  
  if (sDatosPrefijo == "#02#") { 
    // Y = izquierda derecha (izquierda =0, derecha 1023, medio 533)
    sDatosFinal = parseInt(sDatosFinal)
    if (sDatosFinal <= 400) { 
      rotar("IZQ")
    } else if (sDatosFinal >= 600) {
      rotar("DER")
    } else { drone.stop() }
  
  }
  if (sDatosPrefijo == "#03#") { 
    // Pitch(adelante-30 a -90, atras 30 a 90, medio -30 a 30)
    sDatosFinal = parseInt(sDatosFinal)
    if (sDatosFinal <= -30) { 
      adelantarRetroceder("ADE")
    } else if (sDatosFinal >= 30) {
      adelantarRetroceder("RET")
    } else { drone.stop() }
  }
  if (sDatosPrefijo == "#04#") { 
    // Roll(derecha -30 a -90, izquierda 30 a 90, medio -30 a 30)
    sDatosFinal = parseInt(sDatosFinal)
    if (sDatosFinal <= -30) { 
      strafe("DER")
    } else if (sDatosFinal >= 30) {
      strafe("IZQ")
    } else { drone.stop() }  
  } 
  if (sDatosPrefijo == "#06#") {  }

}

server.listen(3000, () => console.log('server on port 3000'))