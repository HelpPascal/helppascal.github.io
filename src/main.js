const goal = 75000;
const raised = 12000.00;
const duration = 6000;
const counterElement = document.getElementById('counter');
let currentAmount = 0;

const svg = document.getElementById('waveform-svg');
const maskRect = document.querySelector('#mask rect');
const waveformGroup = document.getElementById('waveform');
const spacing = 5, totalPoints = 70, lerpFactor = 0.1;
let amplitudes = Array(totalPoints).fill(0);
let targetAmplitudes = Array(totalPoints).fill(0);

window.addEventListener('load', () => {
  const svgWidth = svg.clientWidth;
  const scaleFactor = svgWidth / parseFloat(svg.getAttribute('viewBox').split(' ')[2]);
  maskRect.setAttribute('width', (svgWidth / (goal / raised)) / scaleFactor);
  animateCounter();
});

function formatNumber(num) {
  return num.toLocaleString('nl-BE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function easeOutSlow(t) {
  return 1 - Math.pow(1 - t, 5);
}

function animateCounter() {
  const startTime = Date.now();

  function update() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutSlow(progress);

    currentAmount = Math.floor(easedProgress * raised * 100) / 100;
    counterElement.textContent = formatNumber(currentAmount);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  update();
}

function generateTargetAmplitudes() {
  const baseFrequency = Math.random() * 0.1 + 0.05;
  const variability = 10;

  for (let i = 0; i < totalPoints; i++) {
    let amp = Math.sin(i * baseFrequency) * 8 + Math.random() * variability - variability / 2 + 5;
    targetAmplitudes[i] = Math.max(amp, 0.3);
  }
}

function generateWaveformPath(amps) {
  return amps.reduce((path, amp, i) => {
    const x = i * spacing;
    return path + `V${25 - amp}a1.2 1.2 0 0 1 1.2 -1.2a1.2 1.2 0 0 1 1.2 1.2V${25 + amp}a1.2 1.2 0 0 0 1.2 1.2a1.2 1.2 0 0 0 1.2 -1.2`;
  }, "M0 25 H1 a1.2 1.2 0 0 0 1.2 -1.2");
}

function smoothAmplitudes() {
  for (let i = 0; i < amplitudes.length; i++) {
    amplitudes[i] += (targetAmplitudes[i] - amplitudes[i]) * lerpFactor;
  }
}

function updateWaveform() {
  smoothAmplitudes();
  const pathData = generateWaveformPath(amplitudes);
  waveformGroup.innerHTML = '';

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathData);
  svg.setAttribute('viewBox', `0 0 ${totalPoints * spacing} 50`);
  waveformGroup.appendChild(path);

  const greenPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  greenPath.setAttribute('d', pathData);
  //greenPath.setAttribute('stroke', '#5f9ea0');
  greenPath.setAttribute('stroke', '#3d7e81');
  greenPath.setAttribute('stroke-width', '1.5');
  greenPath.setAttribute('fill', 'none');
  greenPath.setAttribute('mask', 'url(#mask)');
  waveformGroup.appendChild(greenPath);

  requestAnimationFrame(updateWaveform);
}

generateTargetAmplitudes();
setInterval(generateTargetAmplitudes, 4000);
requestAnimationFrame(updateWaveform);