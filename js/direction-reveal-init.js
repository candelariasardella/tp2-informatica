document.addEventListener('DOMContentLoaded', () => {
  DirectionReveal({
    selector: '.direction-reveal--demo-roll-out',
    itemSelector: '.direction-reveal__card',
    animationName: 'roll-out',
    enableTouch: true
  });
});
