# SmartLume

SmartLume is a simple, scalable IoT smart lighting solution developed for SIT314.

## Project Overview

SmartLume simulates IoT lighting devices that generate motion, ambient light and power readings.

Node-RED will process these readings and determine the appropriate lighting level. The processed readings will then be sent to an AWS-based backend for storage and fault checking.

## Planned Architecture

Simulated Sensors  
→ Node-RED  
→ API Gateway  
→ API Lambda  
→ SQS  
→ Processor Lambda  
→ MongoDB Atlas

A simple dashboard will later be used to display current and historical device readings.

## Main Objectives

- Simulate multiple IoT devices
- Process readings using Node-RED
- Store readings in MongoDB Atlas
- Perform asynchronous fault checking
- Demonstrate AWS Lambda scalability
- Measure performance under increased load
- Apply basic security practices

## Current Status

Initial project setup and data design have been completed. The Node.js IoT simulator is the next implementation stage.