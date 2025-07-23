(function () {
  const phone = new URLSearchParams(window.location.search).get('phone') || '+15551234567';
  const position = new URLSearchParams(window.location.search).get('position') || 'right';
  const size = new URLSearchParams(window.location.search).get('size') || '60px';
  const visible = new URLSearchParams(window.location.search).get('visible') || 'true';

  if (visible !== 'true') return;

  const btn = document.createElement('a');
  btn.href = `https://wa.me/${phone.replace('+', '')}`;
  btn.target = '_blank';
  btn.innerText = '💬';
  btn.style.position = 'fixed';
  btn.style.bottom = '20px';
  btn.style[position] = '20px';
  btn.style.width = size;
  btn.style.height = size;
  btn.style.backgroundColor = '#25D366';
  btn.style.borderRadius = '50%';
  btn.style.color = '#fff';
  btn.style.fontSize = '28px';
  btn.style.display = 'flex';
  btn.style.alignItems = 'center';
  btn.style.justifyContent = 'center';
  btn.style.zIndex = '9999';
  btn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  btn.style.textDecoration = 'none';

  document.body.appendChild(btn);
})();
