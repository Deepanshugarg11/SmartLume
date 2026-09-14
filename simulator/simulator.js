const DEVICE_COUNT = 5;
const INTERVAL_MS = 5000;

function generateReading(deviceNumber) {
    const motionDetected = Math.random() > 0.5;

    const ambientLux = Math.floor(Math.random() * 500);

    let brightnessPct;

    if (motionDetected) {
        brightnessPct = ambientLux < 200 ? 100 : 70;
    } else {
        brightnessPct = ambientLux < 200 ? 30 : 0;
    }

    const powerWatts = Number((brightnessPct * 0.5).toFixed(2));

    return {
        device_id: `smartlume-${deviceNumber}`,
        timestamp: new Date().toISOString(),
        location: `Room-${deviceNumber}`,
        motion_detected: motionDetected,
        ambient_lux: ambientLux,
        brightness_pct: brightnessPct,
        power_watts: powerWatts
    };
}

function generateReadings() {
    console.log("\n--- SmartLume Sensor Readings ---");

    for (let i = 1; i <= DEVICE_COUNT; i++) {
        const reading = generateReading(i);

        console.log(JSON.stringify(reading, null, 2));
    }
}

console.log("SmartLume IoT Simulator Started");
console.log(`Simulating ${DEVICE_COUNT} devices`);
console.log(`Sending readings every ${INTERVAL_MS / 1000} seconds`);

generateReadings();

setInterval(generateReadings, INTERVAL_MS);