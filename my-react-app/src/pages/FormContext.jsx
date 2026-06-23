import React, { createContext, useState, useEffect, useMemo, useRef} from "react";
import api from "../birdstrikeApi/strikeData";
import bg1 from "./images/airstrike.jpg";
import bg2 from "./images/birdsStrike.jpg"
import bg3 from "./images/Airside.jpg"
import bg4 from "./images/Airside2.jpg"
import bg5 from "./images/bjlAirdSide3.jpg"
import bg6 from "./images/Airport.jpg"
import bg7 from "./images/bnjlAirSide.jpg"
import bg8 from "./images/airstrike.jpg"
import bg9 from "./images/images.jpg"


export const FormContext = createContext();


export const FormProvider = ({ children }) => {
  
  const [formData, setFormData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [error, setError ] = useState(null) 
  const [errorField, setErrorField] = useState("");

  const [date, setDate] = useState("");
  const [operator, setOperator] = useState("");
  const [aircraft, setAircraft] = useState("");
  const [location, setLocation] = useState("");
  const [timeOfStrike, setTimeOfStrike] = useState("");
  const [runWayUsed, setRunWayUsed] = useState("");
  const [phaseOfFlight, setPhaseOfFlight] = useState("");
  const [effectOnFlight, setEffectOfflight] = useState("");
  const [skyCondition, setSkyCondition] = useState("");
  const [precipitation, setPrecipitation] = useState("");
  const [numberOfBirdsSeen, setNumberOfBirdsSeen] = useState("");
  const [numberOfBirdsStruck, setNumberOfBirdsStruck] = useState("");
  const [sizeOfBirds, setSizeOfBirds] = useState("");
  const [confirmBirds, setConfirmBirds] = useState("");
  const [unconfirmBirds, setUnconfirmBirds] = useState("");

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [reportType, setReportType] = useState("monthly");
  const [userName, setUserName] = useState("");

// print func
const chartRef = useRef();
const handlePrint = () => {
  const printContents = chartRef.current.innerHTML;
  const originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
  window.location.reload();
};



const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date) {
      setError("Field can't be left blank");
      setErrorField("date");
     return false;
    } 
    else if (!operator) {
      setError("Field can't be left blank");
      setErrorField("operator");
      return false;
    } 
    else if (!aircraft) {
      setError("Field can't be left blank");
      setErrorField("aircraft");
      return false;
    }
    else if (!location) {
      setError("Field can't be left blank");
      setErrorField("location");
      return false;
    }
    else if (!timeOfStrike) {
      setError("Field can't be left blank");
      setErrorField("timeOfStrike");
      return false;
    }
    else if (!runWayUsed) {
      setError("Field can't be left blank");
      setErrorField("runWayUsed");
     return false;
    }
    else if (!phaseOfFlight) {
      setError("Field can't be left blank");
      setErrorField("phaseOfFlight");
      return false;
    }
    else if (!effectOnFlight) {
      setError("Field can't be left blank");
      setErrorField("effectOnFlight");
     return false;
    }
    else if (!skyCondition) {
      setError("Field can't be left blank");
      setErrorField("skyCondition");
      return false;
    }
    else if (!precipitation) {
      setError("Field can't be left blank");
      setErrorField("precipitation");
      return false;
    }
    else if (!numberOfBirdsSeen) {
      setError("Field can't be left blank");
      setErrorField("numberOfBirdsSeen");
     return false;
    }
    else if (!numberOfBirdsStruck) {
      setError("Field can't be left blank");
      setErrorField("numberOfBirdsStruck");
     return false;
    }
    else if (!sizeOfBirds) {
      setError("Field can't be left blank");
      setErrorField("sizeOfBirds");
      return false;
    }
    else if (!confirmBirds) {
      setError("Field can't be left blank");
      setErrorField("confirmBirds");
      return false;
    }
    else if (!unconfirmBirds) {
      setError("Field can't be left blank");
      setErrorField("unconfirmBirds");
     return false;
    }
    
    else{   
      const formValues = {
        date,
        flight_operator: operator,
        aircraft,
        incident_location: location,
        time_of_strike: timeOfStrike,
        run_way_used: runWayUsed,
        phase_of_flight: phaseOfFlight,
        effect_on_flight: effectOnFlight,
        sky_condition: skyCondition,
        precipitation,
        number_of_birds_seen: numberOfBirdsSeen,
        number_of_birds_struck: numberOfBirdsStruck,
        size_of_Birds: sizeOfBirds,
        confirm_Birds: confirmBirds,
        unconfirm_Birds: unconfirmBirds,
      };

      try {
        const response = await api.post("/post", formValues);
        // Efficient state update
        setFormData(prev => [...prev, response.data]);
         clearState();
      return true; // success
      } catch (err) {
        console.log(err.message) 
        return false; // failed
      }

     

     }
  };

  const clearState = () => {
    setDate("");
    setOperator("");
    setAircraft("");
    setLocation("");
    setTimeOfStrike("");
    setRunWayUsed("");
    setPhaseOfFlight("");
    setEffectOfflight("");
    setSkyCondition("");
    setPrecipitation("");
    setNumberOfBirdsSeen("");
    setNumberOfBirdsStruck("");
    setSizeOfBirds("");
    setConfirmBirds("");
    setUnconfirmBirds("");
  };

   // delete func
    const handleDelet = async (id) => {
      try {
        await api.delete(`/post/${id}`);
        let totalPersonnel = formData.filter((data) => data.id !== id);
        setFormData(totalPersonnel);
        localStorage.setItem("Personnel", JSON.stringify(totalPersonnel));
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };
  
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get("/post");
        setFormData(response.data);
      } catch (err) {
          setFetchError(err.message);
      }
    };
    fetchItems();
  }, []);

// background images 
const [index, setIndex] = useState(0);

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 60000); // 60000ms = 1 minute
    return () => clearInterval(interval); // cleanup
  }, []);

//display user name
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name); // Display name from backend
    }
  }, []);


 // useMemo is for performance optimization, which mean instead of rendering all data again just render the data that is been changed
  const availableYears = useMemo(() => {
    const years = new Set(
      formData.map((item) => new Date(item.date).getFullYear())
    );
    return Array.from(years).sort((a, b) => b - a);
  }, [formData]);

  const chartData = useMemo(() => {
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const grouped = {};
  
    for (let day = 1; day <= daysInMonth; day++) {
      grouped[day] = { day, confirmed: null, unconfirmed: null };
    }
  
    formData.forEach((item) => {
      const dateObj = new Date(item.date);
      const month = dateObj.getMonth() + 1;
      const year = dateObj.getFullYear();
  
      if (month === selectedMonth && year === selectedYear) {
      const day = dateObj.getDate();
  
        const confirmValue = Number(item.confirm_Birds || 0);
        const unconfirmValue = Number(item.unconfirm_Birds || 0);
  
        if (confirmValue > 0) {
          grouped[day].confirmed =
          (grouped[day].confirmed || 0) + confirmValue;
        }
  
        if (unconfirmValue > 0) {
          grouped[day].unconfirmed =
            (grouped[day].unconfirmed || 0) + unconfirmValue;
        }
      }
    });
  
  return Object.values(grouped).sort((a, b) => a.day - b.day);
  }, [formData, selectedMonth, selectedYear]);

  const totals = useMemo(() => {
  return chartData.reduce(
    (acc, item) => {
      acc.confirmed += item.confirmed || 0;
      acc.unconfirmed += item.unconfirmed || 0;
      return acc;
    },
    { confirmed: 0, unconfirmed: 0 }
  );
}, [chartData]);



const runwayStats = useMemo(() => {
  const stats = {
    "14": { confirmed: 0, unconfirmed: 0 },
    "32": { confirmed: 0, unconfirmed: 0 },
  };
  formData.forEach((item) => {
    const date = new Date(item.date);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

   // conditions
    const isMatch =
      reportType === "monthly"
        ? month === selectedMonth && year === selectedYear
        : year === selectedYear;
    if (isMatch) {
      const runway = item.run_way_used;
      const confirmed = Number(item.confirm_Birds || 0);
      const unconfirmed = Number(item.unconfirm_Birds || 0);
      if (stats[runway]) {
        stats[runway].confirmed += confirmed;
        stats[runway].unconfirmed += unconfirmed;
      }
    }
  });
  return stats;
}, [formData, selectedMonth, selectedYear, reportType]);


//monthly totals
const monthlyTotals = useMemo(() => {
  let confirmed = 0;
  let unconfirmed = 0;

  formData.forEach((item) => {
    const date = new Date(item.date);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month === selectedMonth && year === selectedYear) {
      confirmed += Number(item.confirm_Birds || 0);
      unconfirmed += Number(item.unconfirm_Birds || 0);
    }
  });
  return {
    confirmed,
    unconfirmed,
    total: confirmed + unconfirmed,
  };
}, [formData, selectedMonth, selectedYear]);
  
// yearly report
const yearlyChartData = useMemo(() => {
  const grouped = {};

  formData.forEach((item) => {
    const date = new Date(item.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (year === selectedYear) {

      const confirmValue = Number(item.confirm_Birds || 0);
      const unconfirmValue = Number(item.unconfirm_Birds || 0);

      // Ignore records where both are zero
      if (confirmValue === 0 && unconfirmValue === 0) return;

      if (!grouped[month]) {
        grouped[month] = {
          month,
          confirmed: null,
          unconfirmed: null
        };
      }

      // Only add confirmed if greater than 0
      if (confirmValue > 0) {
        grouped[month].confirmed =
          (grouped[month].confirmed || 0) + confirmValue;
      }

      // Only add unconfirmed if greater than 0
      if (unconfirmValue > 0) {
        grouped[month].unconfirmed =
          (grouped[month].unconfirmed || 0) + unconfirmValue;
      }
    }
  });

  return Object.values(grouped).sort((a, b) => a.month - b.month);

}, [formData, selectedYear]);

// yearly total
const yearlyTotals = useMemo(() => {
  let confirmed = 0;
  let unconfirmed = 0;

  formData.forEach((item) => {
    const date = new Date(item.date);
    const year = date.getFullYear();

    if (year === selectedYear) {
      confirmed += Number(item.confirm_Birds || 0);
      unconfirmed += Number(item.unconfirm_Birds || 0);
    }
  });

  return {
    confirmed,
    unconfirmed,
    total: confirmed + unconfirmed,
  };
}, [formData, selectedYear]);

// yearly statistic
const yearlyRunwayStats = useMemo(() => {
  const stats = {
    "14": { confirmed: 0, unconfirmed: 0 },
    "32": { confirmed: 0, unconfirmed: 0 },
  };

  formData.forEach((item) => {
    const date = new Date(item.date);
    const year = date.getFullYear();

    if (year === selectedYear) {
      const runway = item.run_way_used;
      const confirmed = Number(item.confirm_Birds || 0);
      const unconfirmed = Number(item.unconfirm_Birds || 0);

      if (stats[runway]) {
        stats[runway].confirmed += confirmed;
        stats[runway].unconfirmed += unconfirmed;
      }
    }
  });

  return stats;
}, [formData, selectedYear]);

  return (
    <FormContext.Provider
      value={{
        formData,
        date,
        setDate,
        operator,
        setOperator,
        aircraft,
        setAircraft,
        location,
        setLocation,
        timeOfStrike,
        setTimeOfStrike,
        runWayUsed,
        setRunWayUsed,
        phaseOfFlight,
        setPhaseOfFlight,
        effectOnFlight,
        setEffectOfflight,
        skyCondition,
        setSkyCondition,
        precipitation,
        setPrecipitation,
        numberOfBirdsSeen,
        setNumberOfBirdsSeen,
        numberOfBirdsStruck,
        setNumberOfBirdsStruck,
        sizeOfBirds,
        setSizeOfBirds,
        confirmBirds,
        setConfirmBirds,
        unconfirmBirds,
        setUnconfirmBirds,
        handleSubmit,
        error,
        setErrorField,
        errorField,
        totals,
        availableYears,
        handlePrint,
        chartData,
        setSelectedMonth,
        setSelectedYear,
        selectedMonth,
        selectedYear,
        chartRef,
        runwayStats,
        monthlyTotals,
        yearlyChartData,
        yearlyTotals,
        yearlyRunwayStats,
        setReportType,
        reportType,
        index,
        images,
        userName,
        handleDelet,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

