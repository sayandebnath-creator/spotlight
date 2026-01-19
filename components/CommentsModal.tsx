import { View, Text, Modal, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { use } from 'react'
import { Id } from '@/convex/_generated/dataModel';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { styles } from '@/styles/feed.styles';
import { COLORS } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Loader } from './Loader';
import Comment from './Comment';

type CommentsModal = {
    postId: Id<"posts">;
    visible: boolean;
    onClose: () => void;
    onCommentAdded: () => void;
}

export default function CommentsModal({onClose, visible, postId, onCommentAdded}: CommentsModal) {
  const [newComment, setNewComment] = React.useState("");
  const comments = useQuery(api.comments.getComments, {postId});
  const addComment = useMutation(api.comments.addComment);

  const handleAddComment = async () => {
    if (newComment.trim().length === 0)return;

    try {
        await addComment({postId, content: newComment});
        setNewComment("");
        onCommentAdded();
    } catch (error) {
        console.error("Error adding comment:", error);
    }
  }

    return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.modalContainer}>
            <View style={styles.modalHeader}>
            <TouchableOpacity onPress={onClose}>
                <Ionicons name="close" size={24} color={COLORS.white} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Comments</Text>
            <View style={{ width: 24 }} />
            </View>

            {comments === undefined ? (
                <Loader/>
            ) : (
                <FlatList style={styles.commentsList}
                data={comments}
                renderItem={({item}) => <Comment comment={item} />}
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.commentsList}
                />
            )}
            <View style={styles.commentInput}>
                <TextInput
                style={styles.input}
                placeholder="Add a comment..."
                placeholderTextColor={COLORS.grey}
                value={newComment}
                onChangeText={setNewComment}
                multiline
                />
                <TouchableOpacity onPress={handleAddComment} disabled={!newComment.trim()}>
                <Text style={[styles.postButton, !newComment.trim() && styles.postButtonDisabled]}>
                    Post
                </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </Modal>
  )
}