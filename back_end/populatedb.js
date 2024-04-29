#! /usr/bin/env node

  
  const userArgs = process.argv.slice(2);
  
  const Unit = require("./models/unit");
  const Origin = require ("./models/origin");
  const Class = require("./models/class");
  const Rarity = require("./models/rarity");

  const units = [];
  const origins = [];
  const classes= [];
  const rarities = [];
  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createRarities();
    await createOrigins();
    await createClasses();
    await createUnits();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }
  
  // We pass the index to the ...Create functions so that, for example,
  // genre[0] will always be the Fantasy genre, regardless of the order
  // in which the elements of promise.all's argument complete.
  async function originCreate(index, name) {
    const origin = new Origin({ name: name });
    await origin.save();
    origins[index] = origin;
    console.log(`Added origin: ${name}`);
  }

  async function classCreate(index, name) {
    const unit_class = new Class({ name: name });
    await unit_class.save();
    classes[index] = unit_class;
    console.log(`Added class: ${name}`);
  }

  async function rarityCreate(index, name, cost) {
    const rarity = new Rarity({ name: name, cost: cost });
    await rarity.save();
    rarities[index] = rarity;
    console.log(`Added rarity: ${name}`);
  }
  
  async function unitCreate(index, name, origin, unit_class, rarity, amount, image) {
    const unitdetail = { 
        name: name,
        amount: amount,
        image: image,
        origin: origin,
        class: unit_class,
        rarity: rarity,
    };
  
    const unit = new Unit(unitdetail);
  
    await unit.save();
    units[index] = unit;
    console.log(`Added unit: ${name}`);
  }
  
  
  async function createRarities() {
    console.log("Adding rarities");
    await Promise.all([
        rarityCreate(0, "Common", 1 ),
        rarityCreate(1, "Uncommon", 2 ),
        rarityCreate(2, "Rare", 3 ),
        rarityCreate(3, "Epic", 4 ),
        rarityCreate(4, "Legendary", 5 ),
        
    ])
  }
  
  async function createOrigins() {
    console.log("Adding origins");
    await Promise.all([
        originCreate(
            0, 
            "Jarillo",
        ),
        originCreate(
            1, 
            "Space Station",
        ),
        originCreate(
            2, 
            "Penacony",
        ),
        originCreate(
            3, 
            "Astral Express",
        ),
        originCreate(
            4, 
            "Luofu",
        ),
        originCreate(
            5,
            "Stellaron Hunters"
        ),
    ]);
  }

  async function createClasses() {
    console.log("Adding classes");
    await Promise.all([
        classCreate(
            0, 
            "Reaper",
        ),
        classCreate(
            1, 
            "Brawler",
        ),
        classCreate(
            2, 
            "Sentinel",
        ),
        classCreate(
            3, 
            "Duelist",
        ),
        classCreate(
            4, 
            "Altruist",
        ),
        classCreate(
            5,
            "Gunner",
        )
    ]);
  }

  async function createUnits() {
    console.log("Adding Units");
    await Promise.all([
        unitCreate(
            0,
            "Acheron",
            origins[2],
            classes[0],
            rarities[3],
            11,
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/honkai-star-rail-s-acheron-may-have-more-than-one-identities.jpg",
        ),
        unitCreate(
            1,
            "Stelle",
            origins[4],
            classes[1],
            rarities[4],
            9,
            "https://i.pinimg.com/736x/14/93/51/149351511f86d3fa5039223306076e5f.jpg",
        ),
        unitCreate(
            2,
            "Fu Xuan",
            origins[4],
            classes[2],
            rarities[3],
            17,
            "https://cdn.oneesports.gg/cdn-data/2024/01/HonkaiStarRail_FuXuan_SplashArt.jpg",
        ),
        unitCreate(
            3,
            "Kafka",
            origins[5],
            classes[5],
            rarities[3],
            17,
            "https://dotesports.com/wp-content/uploads/2023/06/image_2023-06-27_165756897.png?resize=768,432",
        ),
        unitCreate(
            4,
            "Blade",
            origins[5],
            classes[3],
            rarities[1],
            22,
            "https://www.charlieintel.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.charlieintel.com/wp-content/uploads/2023/07/18/honkai-star-rail-best-blade-build-eidolons-teams-planar-ornaments-stats-1024x576.jpg",
        ),
        unitCreate(
            5,
            "Seele",
            origins[0],
            classes[0],
            rarities[2],
            17,
            "https://static.zerochan.net/Seele.%28Honkai.Star.Rail%29.full.3945740.png",
        ),
        unitCreate(
            6,
            "Sparkle",
            origins[2],
            classes[4],
            rarities[4],
            9,
            "https://assetsio.gnwcdn.com/Honkai-Star-Rail-Sparkle-materials%2C-kit%2C-and-Eidolons-cover.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
        ),
        

    ])
  }
  