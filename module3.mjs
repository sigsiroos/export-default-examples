let something = 'Come 🤌';

export { something, something as default };

setTimeout(() => {
  something = 'Madonna';
}, 500);