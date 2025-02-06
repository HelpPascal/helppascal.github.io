const goal = 75000;
const raised = 19067.39;
const duration = 6000;
const counterElement = document.getElementById('counter');
let currentAmount = 0;

const svg = document.getElementById('waveform-svg');
const maskRect = document.querySelector('#mask rect');
const waveformGroup = document.getElementById('waveform');
const path = document.getElementById('wf-path1');
const greenPath = document.getElementById('wf-path2');
const spacing = 5, totalPoints = 50, lerpFactor = 0.1;
let amplitudes = Array(totalPoints).fill(0);
let targetAmplitudes = Array(totalPoints).fill(0);

window.addEventListener('load', () => {
  animateCounter();

  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
          navbar.classList.add("bg-white/80", "backdrop-blur", "shadow", "border-b", "border-white/20", "text-slate-700");
          navbar.classList.remove("text-white");
          logo.classList.remove("hidden");
      } else {
          navbar.classList.remove("bg-white/80", "backdrop-blur", "shadow", "border-b", "border-white/20", "text-slate-700");
          navbar.classList.add("text-white");
          logo.classList.add("hidden");
      }
  });
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

    //set counter
    currentAmount = Math.floor(easedProgress * raised * 100) / 100;
    counterElement.textContent = formatNumber(currentAmount);

    //set mask
    const actualPct = 100 / (goal / raised);
    const currentPct = Math.floor(easedProgress * actualPct * 100) / 100;
    maskRect.setAttribute('width', `${currentPct * 1.02}%`);

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
  //waveformGroup.innerHTML = '';

  //const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathData);
  svg.setAttribute('viewBox', `0 0 ${totalPoints * spacing} 50`);
  //waveformGroup.appendChild(path);

  //const greenPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  greenPath.setAttribute('d', pathData);
  //greenPath.setAttribute('stroke', '#5f9ea0');
  //greenPath.setAttribute('stroke', '#558c82');
  //greenPath.setAttribute('stroke-width', '1.5');
  //greenPath.setAttribute('fill', 'none');
  //greenPath.setAttribute('mask', 'url(#mask)');
  //waveformGroup.appendChild(greenPath);

  requestAnimationFrame(updateWaveform);
}

generateTargetAmplitudes();
setInterval(generateTargetAmplitudes, 4000);
requestAnimationFrame(updateWaveform);