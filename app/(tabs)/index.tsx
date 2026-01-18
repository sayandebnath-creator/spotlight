import { Text, View, TouchableOpacity, Pressable, Image, ScrollView } from "react-native";
import { styles } from "../../styles/feed.styles"
import { Link } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { STORIES } from "@/constants/mock-data";
import Story from "@/components/Story";

export default function Index() {
  
  const {signOut} =useAuth()

  return (
    <View
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Spotlight</Text>
        <TouchableOpacity onPress={()=>signOut()}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} horizontal style={styles.storiesContainer}>
        {/* stories */}
        {STORIES.map((story)=>(
          <Story key={story.id} story={story} />
        ))}

      </ScrollView>
    </View>
  );
}

