import { Text, View, TouchableOpacity, Pressable, Image, ScrollView, FlatList, RefreshControl } from "react-native";
import { styles } from "../../styles/feed.styles"
import { Link } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { STORIES } from "@/constants/mock-data";
import Story from "@/components/Story";
import { useQuery } from "convex/react";
import { Loader } from "@/components/Loader";
import { api } from "@/convex/_generated/api";
import Post from "@/components/Post";
import { StoriesSection } from "@/components/Stories";
import { useState } from "react";

export default function Index() {
  
  const {signOut} =useAuth()
  const [refreshing, setrefreshing] = useState(false)

  const posts = useQuery(api.posts.getFeedPosts);

  if (posts === undefined) return <Loader/>

  if (posts.length === 0) return <NoPostsFound/>

  // this does nothing (todo)
  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(()=>{
      setrefreshing(false)
    },2000)
  }

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
      <FlatList
        data={posts}
        renderItem ={({item}) => <Post post={item} />}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60}}
        ListHeaderComponent={<StoriesSection/>}
        refreshControl={
          <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={COLORS.primary}
          />
        }
        />
    </View>
  );
}

const NoPostsFound = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: COLORS.background,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 20, color: COLORS.primary }}>No posts yet</Text>
  </View>
);

