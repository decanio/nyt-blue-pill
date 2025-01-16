// options.js
document.getElementById('save').addEventListener('click', () => {
  const topics = document.getElementById('topics')
    .value
    .split('\n')
    .map(t => t.trim())
    .filter(t => t.length > 0);

  browser.storage.sync.set({
    filterTopics: topics
  }).then(() => {
    alert('Topics saved!');
  });
});

// Load saved topics
browser.storage.sync.get('filterTopics').then((result) => {
  if (result.filterTopics) {
    document.getElementById('topics').value = result.filterTopics.join('\n');
  }
});
