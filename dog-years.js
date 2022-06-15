const dogYears = (planet, age) => {
    const planetObject = {
        earth: 31557600,
        mercury: 0.2408467 * 31557600,
        venus: 0.61519726 * 31557600,
        mars: 1.8808158 * 31557600,
        jupiter: 11.862615 * 31557600,
        saturn: 29.447498 * 31557600,
        uranus: 84.016846 * 31557600,
        neptune: 164.79132 * 31557600,
    };
    return +((7 * age) / planetObject[planet]).toFixed(2);
};
