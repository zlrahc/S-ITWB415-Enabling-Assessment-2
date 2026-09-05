// 2.a. Enum with at least 5 elements
enum KitchenStation {
  EXECUTIVE_CHEF = "Executive Chef",
  SOUS_CHEF = "Sous Chef",
  CHEF_DE_PARTIE = "Chef de Partie",
  PASTRY_CHEF = "Pastry Chef",
  SAUCIER = "Saucier",
  SOMMELIER = "Sommelier",
}

// 2.b. Type alias with at least 5 properties
type CulinaryStaff = {
  staffId: number;
  chefName: string;
  station: KitchenStation;
  isServiceReady: boolean;
  assignedSection?: string;
  print: () => void;
};

// 3. Member 1 Object Instance
const memberOne: CulinaryStaff = {
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
    console.log(
      `Service Status: ${this.isServiceReady ? "Service Ready" : "Prep Shift"}`
    );
    console.log(`Section: ${this.assignedSection ?? "General Line"}`);
  },
};

// 3. Member 2 to 5 Object Instances (Add via Pull Request)
// const memberTwo: CulinaryStaff = { ... };
const memberTwo: CulinaryStaff={
  staffId: 202331054,
  chefName: "Lenard Ramos",
  station: KitchenStation.SAUCIER,
  isServiceReady: true,
  assignedSection: "Main Kitchen",
  print(){
    console.log("=== Restaurant Staff Profile ===");
    console.log(`Staff ID: ${this.staffId}`);
    console.log(`Chef Name: ${this.chefName}`);
    console.log(`Station: ${this.station}`);
    console.log(
      `Service Status: ${this.isServiceReady ? "Service Ready" : "Prep Shift"}`
    );
    console.log(`Section: ${this.assignedSection ?? "General Line"}`);
  }
}
// const memberThree: CulinaryStaff = { ... };
const memberThree: CulinaryStaff={
  staffId: 202331126,
  chefName: "Tobi Padolina",
  station: KitchenStation.SOMMELIER,
  isServiceReady: false,
  assignedSection: "Wine Cellar",
  print(){
    console.log("=== Restaurant Staff Profile ===");
    console.log(`Staff ID: ${this.staffId}`);
    console.log(`Chef Name: ${this.chefName}`);
    console.log(`Station: ${this.station}`);
    console.log(
      `Service Status: ${this.isServiceReady ? "Service Ready" : "Prep Shift"}`
    );
    console.log(`Section: ${this.assignedSection ?? "General Line"}`);
  }
};
// const memberFour: CulinaryStaff = { ... };

const memberFour: CulinaryStaff = {
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
    console.log(
      `Service Status: ${this.isServiceReady ? "Service Ready" : "Prep Shift"}`
    );
    console.log(`Section: ${this.assignedSection ?? "General Line"}`);
  },
};

// const memberFive: CulinaryStaff = { ... };
const memberFive: CulinaryStaff = {
  staffId: 202331055,
  chefName: "Charlz Layug",
  station: KitchenStation.SOUS_CHEF,
  isServiceReady: true,
  assignedSection: "Main Kitchen",
  print() {
    console.log("=== Restaurant Staff Profile ===");
    console.log(`Staff ID: ${this.staffId}`);
    console.log(`Chef Name: ${this.chefName}`);
    console.log(`Station: ${this.station}`);
    console.log(
      `Service Status: ${this.isServiceReady ? "Service Ready" : "Prep Shift"}`
    );
    console.log(`Section: ${this.assignedSection ?? "General Line"}`);
  },
};


// 4. Execute print methods
memberOne.print();
// memberTwo.print();
memberTwo.print();
// memberThree.print();
memberThree.print();
// memberFour.print();
memberFour.print();
// memberFive.print();
memberFive.print();

// Transpiling Instructions:
// Build once: npm run build (or: npx tsc)