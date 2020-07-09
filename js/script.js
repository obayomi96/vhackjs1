const addInput = document.getElementById('add-input');
const deadlineInput = document.getElementById('deadline');
const highPriority = document.getElementById('high');
const mediumPriority = document.getElementById('medium');
const lowPriority = document.getElementById('low');
const submitBtn = document.getElementById('add-btn');

addInput.addEventListener('keyup', log)

function log() {
  console.log('deadline', addInput.value)
}