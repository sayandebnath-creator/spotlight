import { STORIES } from "@/constants/mock-data"
import { ScrollView } from "react-native"
import Story from "./Story"
import { styles } from "@/styles/feed.styles"

export const StoriesSection = () =>{
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.storiesContainer}>
      {/* stories */}
      {STORIES.map((story)=>(
        <Story key={story.id} story={story} />
      ))}
    </ScrollView>
  )
}
