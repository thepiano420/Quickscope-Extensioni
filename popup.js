document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['count', 'patterns'], (data) => {
    if (data.count !== undefined) {
      displayStats(data.count, data.patterns || []);
    }
  });
  
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.sendMessage(
        tabs[0].id, 
        { action: 'getStats' }, 
        (response) => {
          if (chrome.runtime.lastError) {
            console.log('Could not connect to content script:', chrome.runtime.lastError.message);
            return;
          }
          
          if (response) {
            displayStats(response.count, response.patterns);
          }
        }
      );
    }
  });
});

function displayStats(count, patterns) {
  document.getElementById('count').textContent = count || 0;
  
  const severityCounts = {
    Critical: 0,
    High: 0,
    Medium: 0,
    Low: 0
  };
  
  if (patterns && patterns.length > 0) {
    patterns.forEach(pattern => {
      if (severityCounts.hasOwnProperty(pattern.severity)) {
        severityCounts[pattern.severity]++;
      }
    });
  }
  
  document.getElementById('critical-count').textContent = severityCounts.Critical;
  document.getElementById('high-count').textContent = severityCounts.High;
  document.getElementById('medium-count').textContent = severityCounts.Medium;
  document.getElementById('low-count').textContent = severityCounts.Low;
  
  const patternsList = document.getElementById('patterns');
  patternsList.innerHTML = '';
  
  if (patterns && patterns.length > 0) {
    patterns.forEach(pattern => {
      const item = document.createElement('div');
      item.className = 'pattern-item';
      
      const type = document.createElement('div');
      type.className = 'pattern-type';
      type.textContent = pattern.type + ' (' + pattern.severity + ')';
      
      const text = document.createElement('div');
      text.className = 'pattern-text';
      text.textContent = pattern.text;
      
      item.appendChild(type);
      item.appendChild(text);
      patternsList.appendChild(item);
    });
  } else {
    const noPatterns = document.createElement('div');
    noPatterns.className = 'no-patterns';
    noPatterns.textContent = 'No patterns detected on this page';
    patternsList.appendChild(noPatterns);
  }
}