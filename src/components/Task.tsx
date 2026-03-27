import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { TaskItem } from './TaskItem';
import { TaskItem as TaskData } from '../utils/handle-api';

interface TaskListProps {
  tasks: TaskData[];
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

export const Task: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
  
  // Ordena as tarefas em ordem alfabética (A-Z)
  const sortedTasks = [...tasks].sort((a, b) => 
    a.text.localeCompare(b.text)
  );

  return (
    <FlatList
      data={sortedTasks}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TaskItem 
          text={item.text} 
          onEdit={() => onEdit(item._id, item.text)} 
          onDelete={() => onDelete(item._id)} 
        />
      )}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 100,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    paddingVertical: 8,
    marginBottom: 8,
    marginTop: 16,
  },
});