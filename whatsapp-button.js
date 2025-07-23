(function () {
  const urlParams = new URLSearchParams(window.location.search);

  const phone = urlParams.get('phone') || '+15551234567';
  const position = urlParams.get('position') || 'right';
  const size = urlParams.get('size') || 'medium';
  const visible = urlParams.get('visible') || 'true';

  if (visible !== 'true') return;

  const sizeMap = {
    small: '40px',
    medium: '60px',
    large: '80px'
  };

  const button = document.createElement("a");
  button.href = `https://wa.me/${phone.replace(/\D/g, '')}`;
  button.target = "_blank";
  button.innerHTML = "💬";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style[position] = "20px";
  button.style.backgroundColor = "#25D366";
  button.style.color = "white";
  button.style.fontSize = "28px";
  button.style.width = sizeMap[size];
  button.style.height = sizeMap[size];
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  button.style.borderRadius = "50%";
  button.style.textDecoration = "none";
  button.style.zIndex = "9999";
  button.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";

  document.body.appendChild(button);
})();
