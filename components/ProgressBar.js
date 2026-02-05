import { View } from "react-native";
import { COLORS } from "../constants/theme";

export default function ProgressBar({ progress }) {
  return (
    <View style={{ height: 8, backgroundColor: "#999", borderRadius: 10 }}>
      <View
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: COLORS.card,
          borderRadius: 10,
        }}
      />
    </View>
  );
}
