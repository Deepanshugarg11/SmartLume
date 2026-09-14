# SmartLume Data Design

## 1. Sensor Reading

Each simulated SmartLume device generates a sensor reading containing:

- device_id
- timestamp
- location
- motion_detected
- ambient_lux
- brightness_pct
- power_watts

## 2. Example JSON Message

```json
{
  "device_id": "smartlume-1",
  "timestamp": "2026-09-14T00:00:00.000Z",
  "location": "Room-1",
  "motion_detected": true,
  "ambient_lux": 125,
  "brightness_pct": 100,
  "power_watts": 50
}


## 3. MongoDB Document

The MongoDB collection will contain:

- _id
- device_id
- timestamp
- location
- motion_detected
- ambient_lux
- brightness_pct
- power_watts
- fault_flagged
- fault_reason

## 4. Indexes

The planned indexes are:

- device_id
- timestamp

These indexes will support queries for device history and time-based readings.

## 5. Fault Checking

The Processor Lambda will later check whether power consumption is consistent with the current brightness level.

A reading may be flagged when the power consumption is unusually high or low for the selected brightness.