"use strict";
// 2.a. Enum with at least 5 elements
var KitchenStation;
(function (KitchenStation) {
    KitchenStation["EXECUTIVE_CHEF"] = "Executive Chef";
    KitchenStation["SOUS_CHEF"] = "Sous Chef";
    KitchenStation["CHEF_DE_PARTIE"] = "Chef de Partie";
    KitchenStation["PASTRY_CHEF"] = "Pastry Chef";
    KitchenStation["SAUCIER"] = "Saucier";
    KitchenStation["SOMMELIER"] = "Sommelier";
})(KitchenStation || (KitchenStation = {}));
// 3. Member 1 Object Instance
const memberOne = {
    staffId: 202330255,
    chefName: "Alen Umandal",
    station: KitchenStation.PASTRY_CHEF,
    isServiceReady: true,
    assignedSection: "Main Kitchen",
    print() {
        console.log("=== Restaurant Staff Profile ===");
        console.log(`Staff ID: ${this.staffId}`);
        console.log(`Chef Name: ${this.chefName}`);
        console.log(`Station: ${this.station}`);
        console.log(`Service Status: ${this.isServiceReady ? "Service Ready" : "Prep Shift"}`);
        console.log(`Section: ${this.assignedSection ?? "General Line"}`);
    },
};
// 3. Member 2 to 5 Object Instances (Add via Pull Request)
// const memberTwo: CulinaryStaff = { ... };
const memberTwo = {
    staffId: 202331054,
    chefName: "Lenard Ramos",
    station: KitchenStation.SAUCIER,
    isServiceReady: true,
    assignedSection: "Main Kitchen",
    print() {
        console.log("=== Restaurant Staff Profile ===");
        console.log(`Staff ID: ${this.staffId}`);
        console.log(`Chef Name: ${this.chefName}`);
        console.log(`Station: ${this.station}`);
        console.log(`Service Status: ${this.isServiceReady ? "Service Ready" : "Prep Shift"}`);
        console.log(`Section: ${this.assignedSection ?? "General Line"}`);
    }
};
// const memberThree: CulinaryStaff = { ... };
// const memberFour: CulinaryStaff = { ... };
const memberFour = {
    staffId: 202330737,
    chefName: "Ally Martin",
    station: KitchenStation.CHEF_DE_PARTIE,
    isServiceReady: true,
    assignedSection: "Pastry Section",
    print() {
        console.log("=== Restaurant Staff Profile ===");
        console.log(`Staff ID: ${this.staffId}`);
        console.log(`Chef Name: ${this.chefName}`);
        console.log(`Station: ${this.station}`);
        console.log(`Service Status: ${this.isServiceReady ? "Service Ready" : "Prep Shift"}`);
        console.log(`Section: ${this.assignedSection ?? "General Line"}`);
    },
};
// const memberFive: CulinaryStaff = { ... };
// 4. Execute print methods
memberOne.print();
// memberTwo.print();
memberTwo.print();
// memberThree.print();
// memberFour.print();
memberFour.print();
// memberFive.print();
// Transpiling Instructions:
// Build once: npm run build (or: npx tsc)
