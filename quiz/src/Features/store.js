import { configureStore } from "@reduxjs/toolkit";

// sports section
import sportsHardSlice from "./sports/sportsHardSlice";
import sportsMediumSlice from "./sports/sportsMediumSlice";
import sportsEasySlice from "./sports/sportsEasySlice";

// history section
import historyHardSlice from "./history/historyHardSlice";
import historyMediumSlice from "./history/historyMediumSlice";
import historyEasySlice from "./history/historyEasySlice"

// science
import scienceHardSlice from "./science/scienceHardSlice"
import scienceMediumSlice from "./science/scienceMediumSlice";
import scienceEasySlice from "./science/scienceEasySlice"

// geography
import geoHardSlice from "./Geography/geoHardSlice"
import geoMediumSlice from "./Geography/geoMediumSlice"
import geoEasySlice from "./Geography/geoEasySlice"

// random
import randomSlice from "./Random/randomSlice"


const store= configureStore({
    reducer:{
        // sports section
        sportsHard:sportsHardSlice,
        sportsMedium:sportsMediumSlice,
        sportsEasy:sportsEasySlice,

        // history section
        historyHard: historyHardSlice,
        historyMedium: historyMediumSlice,
        historyEasy: historyEasySlice,

        // science section
        scienceHard: scienceHardSlice,
        scienceMedium: scienceMediumSlice,
        scienceEasy: scienceEasySlice,

        // geography section
        geoHard: geoHardSlice,
        geoMedium: geoMediumSlice,
        geoEasy: geoEasySlice,

        // random
        random: randomSlice,
    }
})
export default store