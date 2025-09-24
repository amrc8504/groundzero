document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn-primary').forEach(btn => {
    const trigger = (e) => {
      const r = btn.getBoundingClientRect();
      const x = ((e.clientX ?? (r.left + r.width/2)) - r.left) / r.width * 100;
      const y = ((e.clientY ?? (r.top  + r.height/2)) - r.top ) / r.height * 100;
      btn.style.setProperty('--x', x + '%');
      btn.style.setProperty('--y', y + '%');

      // retrigger animation
      btn.classList.remove('boom');
      // force reflow
      void btn.offsetWidth;
      btn.classList.add('boom');
    };

    btn.addEventListener('pointerenter', trigger);
    btn.addEventListener('click', trigger);
    btn.addEventListener('pointerdown', trigger); // better on touch
  });
});