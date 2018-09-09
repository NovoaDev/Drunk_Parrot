#include <SPI.h>
#include <Wire.h>

//Bottones
#define BOTTON_1 11
#define BOTTON_2 12
#define BOTTON_3 13
//Acelerometro / Giroscopio
#define MPU 0x68
//Joystick Analogico
#define SW_pin 2 
#define X_pin 0 
#define Y_pin 1 

// ---------------------------------------------------------------- Variables
//Bottones 
int iPulsador1,iPulsador2,iPulsador3;
//Acelerometro / Giroscopio
double AcX,AcY,AcZ;
int Pitch, Roll;
bool bPitchCentrado,bRollCentrado;
//Joystick Analogico
int iValJoyX,iValJoyY;
bool bJoyCentradoX,bJoyCentradoY;
//Otras
bool bEnElAire;

void setup(){
  //Bottones
  pinMode(BOTTON_1, INPUT);
  pinMode(BOTTON_2, INPUT);
  pinMode(BOTTON_3, INPUT);
  //Acelerometro / Giroscopio 
  init_MPU(); 
  //Joystick Analogico
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  
  //valores por defecto
  iPulsador1=false;

  Serial.begin(9600);
}

void loop(){
  valoresBotones();
  valoresJoy();
  valoresAce();
}

void valoresBotones() {
  iPulsador1 = digitalRead(BOTTON_1);
  iPulsador2 = digitalRead(BOTTON_2);
  iPulsador3 = digitalRead(BOTTON_3);

  if (iPulsador1 == HIGH) { 
    Serial.println("#00#"+String(bEnElAire));
    if (!bEnElAire){ bEnElAire = true; } else { bEnElAire = false; }
    delay(2000);
  }
}

void valoresAce() {
  FunctionsMPU(); // Adquirimos los ejex AcX, AcY, AcZ.
  
  Pitch = FunctionsPitchRoll(AcY, AcX, AcZ);  //Calculo del angulo del Pitch  
  Roll = FunctionsPitchRoll(AcX, AcZ, AcY);   //Calculo del angulo del Roll

  if ((!bPitchCentrado) or ((Pitch < -30) or (Pitch > 30)))  {
    Serial.println("#03#"+String(Pitch));
    delay(300);
    if ((Pitch > -30) and (Pitch < 30)) {
      bPitchCentrado=true;
    } else { bPitchCentrado=false; }
  }
  if ((!bRollCentrado) or ((Roll < -30) or (Roll > 30)))  {
    Serial.println("#04#"+String(Roll));
    delay(300);
    if ((Roll > -30) and (Roll < 30)) {
      bRollCentrado=true;
    } else { bRollCentrado=false; }
  }   
}

void valoresJoy() {
  // X = arriba abajo(arriba =1023, abajo 0, medio 510)
  // Y = izquierda derecha (izquierda =0, derecha 1023, medio 533)
  iValJoyX=analogRead(X_pin);
  iValJoyY=analogRead(Y_pin);
  
  if ((!bJoyCentradoX) or ((iValJoyX < 400) or (iValJoyX > 600)))  {
    Serial.println("#01#"+String(iValJoyX));
    delay(300);
    if ((iValJoyX > 400) and (iValJoyX < 600)) {
      bJoyCentradoX=true;
    } else { bJoyCentradoX=false; }
  }
  if ((!bJoyCentradoY) or ((iValJoyY < 400) or (iValJoyY > 600)))  {
    Serial.println("#02#"+String(iValJoyY));
    delay(300);
    if ((iValJoyY > 400) and (iValJoyY < 600)) {
      bJoyCentradoY=true;
    } else { bJoyCentradoY=false; }
  }   
}

void init_MPU(){
  Wire.begin();
  Wire.beginTransmission(MPU);
  Wire.write(0x6B);  // PWR_MGMT_1 register
  Wire.write(0);     // Seteamos a cero (wakes up - Despertamos el MPU-6050)
  Wire.endTransmission(true);
  delay(1000);
}

//Funcion para el calculo del angulo Pitch y Roll
double FunctionsPitchRoll(double A, double B, double C){
  double DatoA, DatoB, Value;
  DatoA = A;
  DatoB = (B*B) + (C*C);
  DatoB = sqrt(DatoB);
  Value = atan2(DatoA, DatoB);
  Value = Value * 180/3.14;
  return (int)Value;
}

//Función para adquirir los ejes X, Y, Z del MPU6050
void FunctionsMPU(){
  Wire.beginTransmission(MPU);
  Wire.write(0x3B);  // Empezamos con el registro 0x3B (ACCEL_XOUT_H)
  Wire.endTransmission(false);
  Wire.requestFrom(MPU,6,true);  // requerimos un total de 6 registers
  AcX=Wire.read()<<8|Wire.read();  // 0x3B (ACCEL_XOUT_H) & 0x3C (ACCEL_XOUT_L)     
  AcY=Wire.read()<<8|Wire.read();  // 0x3D (ACCEL_YOUT_H) & 0x3E (ACCEL_YOUT_L)
  AcZ=Wire.read()<<8|Wire.read();  // 0x3D (ACCEL_YOUT_H) & 0x3E (ACCEL_YOUT_L)
}




