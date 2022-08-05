// https://calculator.swiftutors.com/power-density-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const powerdensityRadio = document.getElementById('powerdensityRadio');
const antennaPowerInputRadio = document.getElementById('antennaPowerInputRadio');
const antennaPowerGainRadio = document.getElementById('antennaPowerGainRadio');
const distancetoCenterofRadiationofAntennaRadio = document.getElementById('distancetoCenterofRadiationofAntennaRadio');

let powerdensity;
const PI = Math.PI;
let antennaPowerInput = v1;
let antennaPowerGain = v2;
let distancetoCenterofRadiationofAntenna = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

powerdensityRadio.addEventListener('click', function() {
  variable1.textContent = '(P) Antenna Power Input (mW)';
  variable2.textContent = '(G) Antenna Power Gain';
  variable3.textContent = '(R) Distance to Center of Radiation of Antenna (cm)';
  antennaPowerInput = v1;
  antennaPowerGain = v2;
  distancetoCenterofRadiationofAntenna = v3;
  result.textContent = '';
});

antennaPowerInputRadio.addEventListener('click', function() {
  variable1.textContent = '(S) Power density (mW/cm²)';
  variable2.textContent = '(G) Antenna Power Gain';
  variable3.textContent = '(R) Distance to Center of Radiation of Antenna (cm)';
  powerdensity = v1;
  antennaPowerGain = v2;
  distancetoCenterofRadiationofAntenna = v3;
  result.textContent = '';
});

antennaPowerGainRadio.addEventListener('click', function() {
  variable1.textContent = '(S) Power density (mW/cm²)';
  variable2.textContent = '(P) Antenna Power Input (mW)';
  variable3.textContent = '(R) Distance to Center of Radiation of Antenna (cm)';
  powerdensity = v1;
  antennaPowerInput = v2;
  distancetoCenterofRadiationofAntenna = v3;
  result.textContent = '';
});

distancetoCenterofRadiationofAntennaRadio.addEventListener('click', function() {
  variable1.textContent = '(S) Power density (mW/cm²)';
  variable2.textContent = '(P) Antenna Power Input (mW)';
  variable3.textContent = '(G) Antenna Power Gain';
  powerdensity = v1;
  antennaPowerInput = v2;
  antennaPowerGain = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(powerdensityRadio.checked)
    result.textContent = `Power density = ${computePowerdensity()} mW/cm²`;

  else if(antennaPowerInputRadio.checked)
    result.textContent = `Antenna Power Input = ${computeAntennaPowerInput().toFixed(2)} mW`;

  else if(antennaPowerGainRadio.checked)
    result.textContent = `Antenna Power Gain = ${computeAntennaPowerGain().toFixed(2)}`;

  else if(distancetoCenterofRadiationofAntennaRadio.checked)
    result.textContent = `Distance to Center of Radiation of Antenna = ${computeDistancetoCenterofRadiationofAntenna().toFixed(2)} cm`;
})

// calculation

function computePowerdensity() {
  return (Number(antennaPowerInput.value) * Number(antennaPowerGain.value)) / (4 * PI * Math.pow(Number(distancetoCenterofRadiationofAntenna.value), 2));
}

function computeAntennaPowerInput() {
  return (Number(powerdensity.value) * (4 * PI * Math.pow(Number(distancetoCenterofRadiationofAntenna.value), 2))) / Number(antennaPowerGain.value);
}

function computeAntennaPowerGain() {
  return (Number(powerdensity.value) * (4 * PI * Math.pow(Number(distancetoCenterofRadiationofAntenna.value), 2))) / Number(antennaPowerInput.value);
}

function computeDistancetoCenterofRadiationofAntenna() {
  return Math.pow((Number(antennaPowerInput.value) * Number(antennaPowerGain.value)) / (4 * PI * Number(powerdensity.value)));
}