import { View, Text, TouchableOpacity } from 'react-native'
import {styles} from '@/styles/feed.styles'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'
import { Id } from '@/convex/_generated/dataModel'

type Postprops = {
    post: {
        _id: Id<"posts">;
        _creationTime: number;
        caption?: string;
        likes: number;
        comments: number;
        imageUrl: string;
        isLiked: boolean;
        isBookmarked: boolean;
        author: {
            _id: string;
            username: string;
            image: string;
        }
    };
};

export default function Post({post}: Postprops) {
  return (
    <View style={styles.post}>
        {/* POST HEADER */}
        <View style={styles.postHeader}>
            <Link href={"/(tabs)/notifications"}>
                <TouchableOpacity style={styles.postHeaderLeft}>
                    <Image
                    source={post.author.image}
                    style={styles.postAvatar}
                    contentFit="cover"
                    transition={200}
                    cachePolicy="memory-disk"
                    />
                    <Text style={styles.postUsername}>{post.author.username}</Text>
                </TouchableOpacity>
            </Link>

            {/* show a delete button fix for later as the owner of the post */}
            {/* <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.white} />
            </TouchableOpacity> */}
            <TouchableOpacity>
                <Ionicons name="trash-outline" size={20} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
        {/* IMAGE */}
        <Image
        source={post.imageUrl}
        style={styles.postImage}
        contentFit="cover"
        transition={200}
        cachePolicy="memory-disk"
        />
        {/* Post actions */}
        <View style={styles.postActions}>
            <View style={styles.postActionsLeft}>
            <TouchableOpacity>
                <Ionicons
                name={"heart-outline"}
                size={24}
                color={COLORS.white}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="chatbubble-outline" size={22} color={COLORS.white} />
            </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <Ionicons
                name={"bookmark-outline"}
                size={22}
                color={COLORS.white}
            />
            </TouchableOpacity>
      </View>
        {/* POST INFO */}
        <View style={styles.postInfo}>
            <Text style={styles.likesText}>
            "Be the first to like"
            </Text>
            {post.caption && (
            <View style={styles.captionContainer}>
                <Text style={styles.captionUsername}>{post.author.username}</Text>
                <Text style={styles.captionText}>{post.caption}</Text>
            </View>
            )}

            {post.comments > 0 && (
            <TouchableOpacity>
                <Text style={styles.commentsText}>View all 2 comments</Text>
            </TouchableOpacity>
            )}

            <Text style={styles.timeAgo}>
            2 hrs ago
            </Text>
        </View>
    </View>
  )
}