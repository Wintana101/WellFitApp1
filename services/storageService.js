import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveSteps = async (steps) => {
  try {
    await AsyncStorage.setItem("dailySteps", steps.toString());
  } catch (error) {
    console.log("Error saving steps", error);
  }
};

export const getSteps = async () => {
  try {
    const value = await AsyncStorage.getItem("dailySteps");
    return value ? parseInt(value) : 0;
  } catch (error) {
    console.log("Error loading steps", error);
    return 0;
  }
};
