(() => {
  const counterUrl = 'https://api.counterapi.dev/v1/edwin-darren-hasannudin-portfolio/page-visits/up';
  let initialized = false;

  const initializeCounter = async () => {
    const counterElement = document.getElementById('visitor-count');
    if (!counterElement || initialized) return;
    initialized = true;

    if (!window.location.hostname || ['localhost', '127.0.0.1'].includes(window.location.hostname)) {
      counterElement.textContent = 'Preview';
      return;
    }

    try {
      const response = await fetch(counterUrl, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Counter API returned ${response.status}`);

      const data = await response.json();
      const visitCount = Number(data.count);
      if (!Number.isFinite(visitCount)) throw new Error('Counter API returned an invalid count');

      counterElement.textContent = new Intl.NumberFormat().format(visitCount);
    } catch (error) {
      counterElement.textContent = 'Unavailable';
      console.warn('Visitor counter could not be loaded:', error);
    }
  };

  document.addEventListener('componentsLoaded', initializeCounter, { once: true });
  if (document.getElementById('visitor-count')) initializeCounter();
})();